"use client"

import styled from '@mui/system/styled';
import { useState } from 'react';

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

export function MemoCard({ id }: { id: number }) {
    const [isFlipped, setIsFlipped] = useState(true);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <Card style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            <FrontCard onClick={handleClick}>
                Front {id}
            </FrontCard>
            <BackCard onClick={handleClick}>
                Back
            </BackCard>
        </Card>
    );
}