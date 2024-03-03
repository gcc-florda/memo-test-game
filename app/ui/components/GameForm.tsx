'use client';
import { useState } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
    AtSymbolIcon,
    UserCircleIcon,
    KeyIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { numberOfGames } from '@/app/lib/static-data';

export default function GameForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const startGame = (newGame: boolean) => {
        localStorage.setItem('user', name);

        if (newGame) {
            for (let i = 0; i < numberOfGames; i++) {
                localStorage.removeItem(`${name}${i}score`);
                localStorage.removeItem(`${name}${i}highest`);
            }
        }
    };

    return (
        <form className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h2 className="mb-3 text-2xl">
                    Enter your name to play!
                </h2>
                <div className="w-full mb-10">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="text"
                        >
                            Name
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your name here"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                <Stack className='mb-5' direction="row" spacing={2}>
                    <Link href={"/home"}>
                        <Button variant="outlined" onClick={() => { startGame(true) }}>
                            New Game
                        </Button>
                    </Link>
                    <Link href={"/home"}>
                        <Button variant="outlined" onClick={() => { startGame(false) }}>
                            Continue
                        </Button>
                    </Link>
                </Stack>
            </div>
        </form>
    );
}
