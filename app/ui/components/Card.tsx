"use client"

import styled from '@mui/system/styled';

const Card = styled('div')({
    backgroundColor: '#2196f3',
    height: 300,
    width: 250,
    display: 'flex',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#0d47a1',
    },
});

export function MemoCard() {
    return (
        <Card />
    );
}