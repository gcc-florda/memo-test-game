"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { MemoCard } from './MemoCard';

interface MemoCardData {
    id: number;
    value: number;
    isFlipped: boolean;
    isMatched: boolean;
}

export function MemoTest({ id }: { id: string }) {

    const [score, setScore] = useState(100);
    const [matchedCards, setMatchedCards] = useState(0);

    const [cards, setCards] = useState<MemoCardData[]>(() => {
        const initialCards: MemoCardData[] = [];
        for (let i = 0; i < 6; i++) {
            i % 2 == 0 ? initialCards.push(
                { id: i, value: i + 1, isFlipped: true, isMatched: false }
            ) : initialCards.push({ id: i, value: i - 1, isFlipped: true, isMatched: false });
        }
        return initialCards;
    });

    useEffect(() => {
        setCards(prevCards => shuffle(prevCards));
    }, []);

    useEffect(() => {
        if (matchedCards === 6) {
            console.log("FINISHED GAME")
        }
    }, [matchedCards]);

    const shuffle = (array: MemoCardData[]) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleCardClick = (clickedId: number) => {
        const updatedCards = cards.map(card => {
            if (card.id === clickedId && card.isFlipped) {
                return { ...card, isFlipped: false };
            }
            return card;
        });

        setCards(updatedCards);

        const flippedCards = updatedCards.filter(card => (!card.isFlipped && !card.isMatched));

        console.log(flippedCards);

        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;

            if (firstCard.value === secondCard.id) {
                setTimeout(() => {
                    const unflippedCards = updatedCards.map(card =>
                        !card.isFlipped ? { ...card, isMatched: true } : card
                    );
                    setCards(unflippedCards);
                    setScore(score + 10);
                    setMatchedCards(prevCount => prevCount + 2);
                }, 1000);

            } else {
                setTimeout(() => {
                    const unflippedCards = updatedCards.map(card =>
                        (!card.isFlipped && !card.isMatched) ? { ...card, isFlipped: true } : card
                    );
                    setCards(unflippedCards);
                    setScore(score - 10);
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
                                <MemoCard id={card.id} isFlipped={card.isFlipped} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}