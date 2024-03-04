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

    const initialCards = [];
    for (let i = 0; i < 6; i++) {
        i % 2 == 0 ? initialCards.push(
            { id: i, img: imageUrls[i], value: i + 1, isFlipped: true, isMatched: false }
        ) : initialCards.push({ id: i, img: imageUrls[i], value: i - 1, isFlipped: true, isMatched: false });
    }
    return initialCards;
}