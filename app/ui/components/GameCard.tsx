"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Favourite from '@mui/icons-material/Favorite';
import Image from 'next/image';
import Link from 'next/link';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const getUserScore = (gameId: string, userName: string = "") => {
    let score = 0;
    if (userName == "") {
        const user = localStorage.getItem("user");
        let userScore = localStorage.getItem(`${user}${gameId}score`);
        !userScore ? score = 0 : score = JSON.parse(userScore);
    }
    else {
        let userScore = localStorage.getItem(`${userName}${gameId}score`);
        !userScore ? score = 0 : score = JSON.parse(userScore);
    }
    return score
}

const getHighestScore = (gameId: string) => {
    let score = 0;
    const user = localStorage.getItem("user");
    let userScore = localStorage.getItem(`${user}${gameId}highest`);
    !userScore ? score = 0 : score = JSON.parse(userScore);
    return score
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

export default function GameCard({ id, title, detail, img }: { id: string, title: string, detail: string, img: string }) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
            <CardActions disableSpacing>
                <Link href={`/home/game/${id}`}>
                    <IconButton aria-label="play" >
                        <PlayArrowRoundedIcon sx={{ fontSize: '2.5rem' }} />
                    </IconButton>
                </Link>
                <IconButton aria-label="share">
                    <Favourite />
                </IconButton>
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
                <CardContent>
                    <Typography paragraph>Your Score: {getUserScore(id) ? getUserScore(id) : 0}</Typography>
                    <Typography paragraph>Highest Score: {getHighestScore(id) ? getHighestScore(id) : 0}</Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
}