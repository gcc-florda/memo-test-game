"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { MemoCard } from './MemoCard';
import { WinnerCard } from './WinnerCard';
import { saveGameScore, saveGame, getMatchedCardsAmount, getGameRetries, restartGameSession } from '@/app/lib/data';
import { getCards, shuffleCards } from '@/app/lib/utils';
import { numberOfCards } from '@/app/lib/static-data';
import WinnerConffeti from '../animations/Conffeti';

export function MemoTest({ id }: { id: string }) {

    const [retries, setRetries] = useState(0);
    const [matchedCards, setMatchedCards] = useState(0);
    const [cards, setCards] = useState(() => getCards(id));
    const [showWinnerCard, setWinnerCard] = useState(false);

    useEffect(() => {
        const matched = getMatchedCardsAmount(id);
        setRetries(getGameRetries(id));
        setMatchedCards(matched);
    }, []);

    useEffect(() => {
        if (matchedCards == numberOfCards) {
            const score = Math.round(((numberOfCards / 2) / (retries ? retries : 1)) * 100);
            saveGameScore(id, score);
            restartGameSession(id);
            setWinnerCard(true);
        }
    }, [matchedCards]);

    const handleCardClick = (clickedId: number) => {
        const updatedCards = cards.map(card => {
            if (card.id == clickedId && card.isFlipped) return { ...card, isFlipped: false };
            return card;
        });

        setCards(updatedCards);

        const flippedCards = updatedCards.filter(card => (!card.isFlipped && !card.isMatched));

        if (flippedCards.length == 2) {
            const [firstCard, secondCard] = flippedCards;

            if (firstCard.value == secondCard.id) {
                setTimeout(() => {
                    const unflippedCards = updatedCards.map(card => !card.isFlipped ? { ...card, isMatched: true } : card);
                    setCards(unflippedCards);
                    setMatchedCards(matchedCards => matchedCards + 2);
                    saveGame(id, firstCard.id, secondCard.id, retries);
                }, 1000);
            } else {
                setTimeout(() => {
                    const unflippedCards = updatedCards.map(card => (!card.isFlipped && !card.isMatched) ? { ...card, isFlipped: true } : card);
                    setCards(unflippedCards);
                    setRetries(retries => retries + 1)
                    saveGame(id, -1, -1, retries + 1);
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

            {
                showWinnerCard && (
                    <div>
                        <WinnerCard score={Math.round(((numberOfCards / 2) / (retries ? retries : 1)) * 100)} />
                        <WinnerConffeti></WinnerConffeti>
                    </div>
                )
            }
        </div>
    );
}