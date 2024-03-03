"use client"

import styled from '@mui/system/styled';

const FrontCard = styled('div')({
    position: 'absolute',
    height: 300,
    width: 250,
    display: 'flex',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backfaceVisibility: 'hidden',
    border: '1px solid black', // Add black border
    '&:hover': {
        backgroundColor: '#e57373',
    }
});

const BackCard = styled('div')({
    position: 'absolute',
    // backgroundColor: '#ea80fc',
    height: 300,
    width: 250,
    display: 'flex',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    border: '1px solid black', // Add black border
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
});

export function MemoCard({ id, isFlipped }: { id: number, isFlipped: boolean }) {
    return (
        <Card style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            <FrontCard className={`bg-[url(/animals/1.png)]`}>
                Front {id}
            </FrontCard>
            <BackCard className='bg-gradient-to-r from-sky-500 to-indigo-500'>
                Back {id}
            </BackCard>
        </Card >
    );
}