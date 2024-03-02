'use client';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function GameForm() {

    return (
        <form className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h2 className="mb-3 text-2xl">
                    Enter your name to play!
                </h2>
                <div className="w-full mb-8">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Name
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your name here"
                                required
                            />
                            {/* <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                        </div>
                    </div>
                </div>
                <Stack direction="row" spacing={2}>
                    <Link href="/home">
                        <Button variant="outlined">
                            New Game
                        </Button>
                    </Link>
                    <Button variant="outlined" color="success">
                        Continue
                    </Button>
                </Stack>
            </div>
        </form>
    );
}
