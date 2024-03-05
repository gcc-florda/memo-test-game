'use client';
import { useState } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { startGame } from '@/app/lib/data';

export default function GameForm() {
    const [name, setName] = useState('');

    return (
        <form className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h2 className="mb-3 text-2xl">
                    Enter your name to play!
                </h2>
                <div className="w-full mb-10">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-lg font-medium text-gray-900"
                            htmlFor="text"
                        >
                            Name
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-base  outline-2 placeholder:text-gray-500"
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
                <Stack className='mb-5' direction="row" spacing={2} justifyContent="center">
                    <Link href={"/home"}>
                        <button
                            className="text-white rounded-lg py-2 px-3 text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                            onClick={() => { startGame(name) }}>
                            New Game
                        </button>
                    </Link>
                </Stack>
            </div>
        </form>
    );
}
