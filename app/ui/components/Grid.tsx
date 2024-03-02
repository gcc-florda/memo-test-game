"use client"

import * as React from 'react';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { MemoCard } from './MemoCard';

interface MemoCardData {
    id: number;
    value: number;
}

export function GameGrid({ id }: { id: string }) {

    const [cards, setCards] = useState<MemoCardData[]>(() => {
        // Generate an array of card objects with unique IDs and values
        const initialCards: MemoCardData[] = [];
        for (let i = 0; i < 6; i++) {
            initialCards.push({ id: i, value: i + 1 });
        }
        return initialCards;
    });

    const [flippedCards, setFlippedCards] = useState<number[]>([]);

    const handleCardClick = (id: number) => {
        // Prevent flipping already matched cards or more than two flipped cards
        if (flippedCards.length === 2 || flippedCards.includes(id)) {
            console.log("HOLAAA")
            return;
        }

        setFlippedCards([...flippedCards, id]);

        if (flippedCards.length === 1) {
            const firstCard = cards.find((card) => card.id === flippedCards[0]);
            const secondCard = cards.find((card) => card.id === id);

            if (firstCard && secondCard && firstCard.value === secondCard.value) {
                // Match found
                setFlippedCards([]);
            } else {
                // No match, flip cards back after a short delay
                setTimeout(() => {
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4"> {/* Add padding to both sides */}
            <div className="w-full max-w-screen-lg"> {/* Add padding to the left */}
                <Grid container spacing={2}>
                    {cards.map((card, i) => {
                        return (
                            <Grid item xs={2} sm={4} key={i}>
                                <div onClick={() => handleCardClick(card.id)} style={{}} >
                                    <MemoCard id={card.id} />
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    );
}