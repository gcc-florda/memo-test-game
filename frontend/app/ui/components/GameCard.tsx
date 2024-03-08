"use client"

import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import Image from 'next/image';
import Link from 'next/link';
import { restartGameSession } from '@/app/lib/data';
import { getUserScore, getHighestScore } from '@/app/lib/utils';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function GameCard({ id, title }: { id: string, title: string }) {
    const [expanded, setExpanded] = useState(false);
    const [score, setScore] = useState(() => getUserScore(id));
    const [highestScore, setHighestScore] = useState(() => getHighestScore(id));

    const handleExpandClick = () => { setExpanded(!expanded); };

    const handleReplayClick = () => { restartGameSession(id); };

    return (
        <Card sx={{ backgroundColor: "#b2dfdb" }}>
            <div className="h-60 hidden md:block overflow-hidden">
                <Image src={`/${title}.png`} width={1000} height={1000} alt="Card Logo" priority={true} />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title[0].toUpperCase() + title.substring(1)} Game
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Awsome {title} Memo Game
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Link href={`/home/game/${id}`}>
                    <IconButton aria-label="play" >
                        <PlayArrowRoundedIcon sx={{ fontSize: '2.0rem' }} />
                    </IconButton>
                </Link>
                <Link href={`/home/game/${id}`} >
                    <IconButton aria-label="replay" onClick={handleReplayClick}>
                        <ReplayRoundedIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                </Link>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className='text-center font-semibold'>
                    <Typography paragraph>Latest Score: {score}</Typography>
                    <Typography paragraph>Highest Score: {highestScore}</Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
}