"use client"

import * as React from 'react';
import { Grid } from '@mui/material';
import { MemoCard } from './Card';

export function GameGrid() {
    return (
        <div>
            <Grid container spacing={2}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} key={index}>
                        <MemoCard />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
