"use client"

import * as React from 'react';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { MemoCard } from './MemoCard';

import styled from '@mui/system/styled';

const FrontCard = styled('div')({
    position: 'absolute',
    backgroundColor: '#ff8a80',
    height: 300,
    width: 250,
    display: 'flex',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backfaceVisibility: 'hidden',
    '&:hover': {
        backgroundColor: '#e57373',
    },
});

const BackCard = styled('div')({
    position: 'absolute',
    backgroundColor: '#ea80fc',
    height: 300,
    width: 250,
    display: 'flex',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    '&:hover': {
        backgroundColor: '#ba68c8',
    },
});

const Card = styled('div')({
    height: 300,
    width: 250,
    display: 'flex',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    '&:hover': {
        backgroundColor: '#0d47a1',
    },
});

interface MemoCardData {
    id: number;
    value: number;
    isFlipped: boolean;
}

export function GameGrid({ id }: { id: string }) {

    const [cards, setCards] = useState<MemoCardData[]>(() => {
        const initialCards: MemoCardData[] = [];
        for (let i = 0; i < 6; i++) {
            initialCards.push({ id: i, value: i + 1, isFlipped: false });
        }
        return initialCards;
    });

    const handleCardClick = (clickedId: number) => {
        const updatedCards = cards.map(card => {
            if (card.id === clickedId && !card.isFlipped) {
                return { ...card, isFlipped: true };
            }
            return card;
        });

        setCards(updatedCards);

        const flippedCards = updatedCards.filter(card => card.isFlipped);

        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;

            if (firstCard.value === secondCard.id) {
                // Match found
                console.log("MATCH")
                setTimeout(() => {
                    setCards(prevCards =>
                        prevCards.map(card =>
                            card.isFlipped ? { ...card, isFlipped: true } : card
                        )
                    );
                }, 1000);
            } else {
                setTimeout(() => {
                    setCards(prevCards =>
                        prevCards.map(card =>
                            card.isFlipped ? { ...card, isFlipped: false } : card
                        )
                    );
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
                                <Card style={{ transform: card.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                                    <FrontCard>
                                        Front {i}
                                    </FrontCard>
                                    <BackCard>
                                        Back {i}
                                    </BackCard>
                                </Card>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}