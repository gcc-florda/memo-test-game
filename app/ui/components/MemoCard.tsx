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
    border: '1px solid black',
    '&:hover': {
        backgroundColor: '#e57373',
    },
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
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

export function MemoCard({ id, img, isFlipped }: { id: number, img: string, isFlipped: boolean }) {
    return (
        <Card style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            <FrontCard style={{ backgroundImage: `url(${img})` }}>
                Front {id}
            </FrontCard>
            <BackCard className='bg-gradient-to-r from-sky-500 to-indigo-500'>
                <span className="text-white text-4xl">{id}</span>
            </BackCard>
        </Card >
    );
}