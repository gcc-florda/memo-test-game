import { getMatchedCards, getCardsPosition } from "./data";
import { numberOfCards } from '@/app/lib/static-data';


export const getUserScore = (gameId: string, userName: string = "") => {
    let score = 0;
    if (userName == "") {
        const user = localStorage.getItem("user");
        const username = JSON.stringify(user);
        let userScore = localStorage.getItem(`${user}${gameId}score`);
        !userScore ? score = 0 : score = JSON.parse(userScore);
    }
    else {
        let userScore = localStorage.getItem(`${userName}${gameId}score`);
        !userScore ? score = 0 : score = JSON.parse(userScore);
    }
    return score
}

export const getHighestScore = (gameId: string) => {
    let score = 0;
    const user = localStorage.getItem("user");
    let userScore = localStorage.getItem(`${user}${gameId}highest`);
    !userScore ? score = 0 : score = JSON.parse(userScore);
    return score
}

export const shuffleCards = (cards: any[]) => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards;
};

export const getCards = (gameId: string) => {
    const imageUrls = [
        `/${gameId}/1.png`,
        `/${gameId}/1.png`,
        `/${gameId}/2.png`,
        `/${gameId}/2.png`,
        `/${gameId}/3.png`,
        `/${gameId}/3.png`,
    ];

    const matchedCards = getMatchedCards(gameId);
    const shuffledPositions = getCardsPosition(gameId);

    const initialCards = [];
    for (let i = 0; i < numberOfCards; i++) {
        let isFlipped;
        let shuffledPosition;
        matchedCards.includes(i) ? isFlipped = false : isFlipped = true;
        shuffledPositions.length != 0 ? shuffledPosition = shuffledPositions[i] : shuffledPosition = i;

        i % 2 == 0 ? initialCards.push(
            { id: i, img: imageUrls[i], value: i + 1, isFlipped: isFlipped, isMatched: !isFlipped }
        ) : initialCards.push({ id: i, img: imageUrls[i], value: i - 1, isFlipped: isFlipped, isMatched: !isFlipped });
    }
    return initialCards;
}