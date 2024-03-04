import { getMatchedCards, getCardsPosition } from "./actions";

export const getUserScore = (gameId: string, userName: string = "") => {
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

export const getHighestScore = (gameId: string) => {
    let score = 0;
    const user = localStorage.getItem("user");
    let userScore = localStorage.getItem(`${user}${gameId}highest`);
    !userScore ? score = 0 : score = JSON.parse(userScore);
    return score
}

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
    for (let i = 0; i < 6; i++) {
        let isFlipped;
        let shuffledPosition;
        matchedCards.includes(i) ? isFlipped = false : isFlipped = true;
        shuffledPositions.length != 0 ? shuffledPosition = shuffledPositions[i] : shuffledPosition = i;

        i % 2 == 0 ? initialCards.push(
            { id: i, img: imageUrls[i], value: i + 1, isFlipped: isFlipped, isMatched: !isFlipped, shuffledPosition: i }
        ) : initialCards.push({ id: i, img: imageUrls[i], value: i - 1, isFlipped: isFlipped, isMatched: !isFlipped, shuffledPosition: i });
    }
    return initialCards;
}