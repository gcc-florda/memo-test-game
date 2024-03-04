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