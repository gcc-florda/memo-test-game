import { numberOfGames } from '@/app/lib/static-data';

export const startGame = (name: string, newGame: boolean) => {
    localStorage.setItem('user', name);

    if (newGame) {
        for (let i = 0; i < numberOfGames; i++) {
            localStorage.removeItem(`${name}${i}score`);
            localStorage.removeItem(`${name}${i}highest`);
        }
    }
};

export const restartGameSession = (gameId: string) => {
    const user = localStorage.getItem('user');
    if (user) {
        localStorage.removeItem(`${user}${gameId}score`);
        localStorage.removeItem(`${user}${gameId}highest`);
    }
}

export const saveGameScore = (gameId: string, score: number) => {
    const user = localStorage.getItem("user");
    localStorage.setItem(`${user}${gameId}score`, JSON.stringify(score));

    const highestScore = localStorage.getItem(`${user}${gameId}highest`);

    if (!highestScore || score > JSON.parse(highestScore)) {
        localStorage.setItem(`${user}${gameId}highest`, JSON.stringify(score));
    }
}

export const saveCardsPosition = (gameId: string, cardsPosition: Array<number>) => { localStorage.setItem(`${gameId}`, JSON.stringify(cardsPosition)); }

export const getCardsPosition = (gameId: string) => {
    const cardsPositions = localStorage.getItem(`${gameId}`);
    if (cardsPositions) { return JSON.parse(cardsPositions) }
    else return []
};

export const getGameRetries = (gameId: string) => {
    const user = localStorage.getItem("user");
    const retries = localStorage.getItem(`${user}${gameId}retries`);
    if (retries) return JSON.parse(retries)
    return 0
}

export const matchedCardsAmount = (gameId: string) => { return getMatchedCards(gameId).length; }

export const getMatchedCards = (gameId: string) => {
    const user = localStorage.getItem("user");
    const matchedCards = localStorage.getItem(`${user}${gameId}`);
    let cardsMatchedArray;
    matchedCards ? cardsMatchedArray = JSON.parse(matchedCards) : cardsMatchedArray = [];
    return cardsMatchedArray;
}

export const saveGame = (gameId: string, firstCardId: number, secondCardId: number, retries: number) => {
    const user = localStorage.getItem("user");

    if (firstCardId != -1 && secondCardId != -1) {
        let matchedCards = getMatchedCards(gameId);
        matchedCards.push(firstCardId);
        matchedCards.push(secondCardId);
        localStorage.setItem(`${user}${gameId}`, JSON.stringify(matchedCards));
    }

    localStorage.setItem(`${user}${gameId}retries`, JSON.stringify(retries));
}

export const restartGame = (gameId: string) => { }
