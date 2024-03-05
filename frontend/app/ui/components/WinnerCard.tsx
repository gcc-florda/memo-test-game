"use client"

import { Button, Card, CardContent } from '@mui/material'
import Link from 'next/link';

export function WinnerCard({ score }: { score: number }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg border-4 border-white">
                <CardContent>
                    <h2 className="text-4xl text-center text-white mb-4">Congratulations!</h2>
                    <h3 className="text-2xl text-center text-white mb-4">You've won the game!</h3>
                    <p className="text-lg text-center text-white mb-6">Your score is {score}</p>
                    <div className="flex justify-center">
                        <Link href={"/home"}>
                            <Button color="primary" variant="contained" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-bold py-2 px-4 rounded">
                                Go Home
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}