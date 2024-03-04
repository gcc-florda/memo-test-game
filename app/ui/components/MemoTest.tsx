"use client"

import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Grid, Button, Snackbar } from '@mui/material';
import { MemoCard } from './MemoCard';
import { saveGameScore, saveGame, matchedCardsAmount, getGameRetries } from '@/app/lib/actions';
import { getCards } from '@/app/lib/utils';

const CARDS = 6;

interface MemoCardData {
    id: number;
    img: string;
    value: number;
    isFlipped: boolean;
    isMatched: boolean;
    shuffledPosition: number;
}

const shuffle = (cards: MemoCardData[]) => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        shuffledCards[i].shuffledPosition = j;
        shuffledCards[j].shuffledPosition = i;
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards;
};

export function MemoTest({ id }: { id: string }) {

    const [retries, setRetries] = useState(0);
    const [matchedCards, setMatchedCards] = useState(0);
    const [openAlert, setOpenAlert] = useState(false);
    const [cards, setCards] = useState(getCards(id));

    useEffect(() => {
        const matched = matchedCardsAmount(id);
        setRetries(getGameRetries(id));
        setMatchedCards(matched);
        if (matched == 0) setCards(prevCards => shuffle(prevCards));
    }, []);

    // useEffect(() => {

    //     const matched = matchedCardsAmount(id);
    //     setRetries(getGameRetries(id));
    //     setMatchedCards(matched);
    //     if (matched == 0) setCards(prevCards => shuffle(prevCards));
    //     // const savedGame = getSavedGame(id);
    //     const savedGame = localStorage.getItem(`savedGame${id}`);
    //     if (savedGame) {
    //         const game = JSON.parse(savedGame);
    //         // setRetries(game.retries);
    //         // setMatchedCards(game.matchedCards);
    //         setCards(game.cards);
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem(`savedGame${id}`, JSON.stringify({ id, cards, retries, matchedCards }));
    // }, [cards, retries, matchedCards]);

    useEffect(() => {
        if (matchedCards === CARDS) {
            const score = (CARDS / (retries ? retries : 1)) * 100;
            saveGameScore(id, score);
            setOpenAlert(true);
        }
    }, [matchedCards]);

    const handleCardClick = (clickedId: number) => {
        const updatedCards = cards.map(card => {
            if (card.id === clickedId && card.isFlipped) return { ...card, isFlipped: false };
            return card;
        });

        setCards(updatedCards);

        const flippedCards = updatedCards.filter(card => (!card.isFlipped && !card.isMatched));

        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;

            if (firstCard.value === secondCard.id) {
                console.log("MATCH")

                setTimeout(() => {
                    const unflippedCards = updatedCards.map(card =>
                        !card.isFlipped ? { ...card, isMatched: true } : card
                    );
                    setCards(unflippedCards);
                    setMatchedCards(matchedCards => matchedCards + 2);
                    saveGame(id, firstCard.id, secondCard.id, retries);
                }, 1000);


            } else {
                console.log("NO MATCH")
                setTimeout(() => {
                    const unflippedCards = updatedCards.map(card =>
                        (!card.isFlipped && !card.isMatched) ? { ...card, isFlipped: true } : card
                    );
                    setCards(unflippedCards);
                    setRetries(retries => retries + 1)
                    saveGame(id, -1, -1, retries);
                }, 1000);

            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-screen-lg">
                <Grid container spacing={2}>
                    {cards.map((card, i) => (
                        <Grid item xs={2} sm={4} key={i}>
                            <div onClick={() => handleCardClick(card.id)}>
                                <MemoCard id={i + 1} img={card.img} isFlipped={card.isFlipped} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className="border border-white rounded-md p-2 mb-4">
                <div className="text-white text-2xl">Retries: {retries}</div>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openAlert}
                color='white'
                autoHideDuration={6000}
                message={`Congratulations! Your final score is ${(CARDS / (retries ? retries : 1)) * 100}`}
                action={
                    <Link href={"/home"}>
                        <Button color="primary" size="small">
                            Home
                        </Button>
                    </Link>
                }
            />
        </div>
    );
}