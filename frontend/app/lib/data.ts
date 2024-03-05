export const startGame = (name: string) => { localStorage.setItem('user', name); };

export const restartGameSession = (gameId: string) => {
    const user = localStorage.getItem('user');
    if (user) {
        localStorage.removeItem(`${user}${gameId}`);
        localStorage.removeItem(`${user}${gameId}retries`);
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

export const getMatchedCardsAmount = (gameId: string) => { return getMatchedCards(gameId).length; }

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
