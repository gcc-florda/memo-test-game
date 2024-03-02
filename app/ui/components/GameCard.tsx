import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Favourite from '@mui/icons-material/Favorite';
import Image from 'next/image';
import Link from 'next/link';

export default function GameCard({ id, title, detail, img }: { id: string, title: string, detail: string, img: string }) {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#e1bee7" }}>
            <Image src='/animals.jpg' width={1000} height={140} className="hidden md:block" alt="Card Logo" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/home/game/${id}`}>
                    <IconButton aria-label="play" >
                        <PlayArrowRoundedIcon sx={{ fontSize: '2.5rem' }} />
                    </IconButton>
                </Link>
                <IconButton aria-label="share">
                    <Favourite />
                </IconButton>
            </CardActions>
        </Card >
    );
}