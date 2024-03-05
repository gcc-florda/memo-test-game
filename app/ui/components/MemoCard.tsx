"use client"

import styled from '@mui/system/styled';
import { useState, useEffect } from 'react';

const FrontCard = styled('div')({
    position: 'absolute',
    height: 300,
    width: 250,
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backfaceVisibility: 'hidden',
    border: '1px solid black',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

const BackCard = styled('div')({
    position: 'absolute',
    height: 300,
    width: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    border: '1px solid black',
});


const Card = styled('div')({
    height: 300,
    width: 250,
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'transform 0.7s',
    transformStyle: 'preserve-3d',
});

export function MemoCard({ id, img, isFlipped }: { id: number, img: string, isFlipped: boolean }) {
    const [animationFlip, setAnimationFlip] = useState(false);
    useEffect(() => { setAnimationFlip(true) }, [])

    return (
        <Card style={{ transform: animationFlip && isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            <BackCard className='bg-gradient-to-r from-sky-500 to-indigo-500'>
                <span className="text-white text-4xl">{id}</span>
            </BackCard>
            <FrontCard style={{ backgroundImage: `url(${img})` }} />
        </Card >
    );
}