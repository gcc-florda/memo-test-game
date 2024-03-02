"use client"

import * as React from 'react';
import { Grid } from '@mui/material';
import { MemoCard } from './MemoCard';

export function GameGrid() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4"> {/* Add padding to both sides */}
            <div className="w-full max-w-screen-lg"> {/* Add padding to the left */}
                <Grid container spacing={2}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} key={index}>
                            <MemoCard />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}