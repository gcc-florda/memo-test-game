import { MemoTest } from "@/app/ui/components/MemoTest";
import { getMemoTest, createGameSession, getGameSession } from '@/app/lib/graphql-data';


export default async function Page({ params }: { params: { id: string } }) {

    const memoTestData = await getMemoTest(params.id);
    const memoTestImages = JSON.parse(memoTestData["get_memo_test"].images);

    const gameSessionData = await getGameSession(params.id);
    let gameSession = gameSessionData["get_game_session"];
    let retries;
    let state;

    if (gameSession == null) {
        const startGameSessionData = await createGameSession(params.id, params.id, 0, 0, 'STARTED');
        gameSession = startGameSessionData["create_game_session"]
    }
    retries = gameSession.retries;
    state = gameSession.state;

    console.log(retries, state);

    return (
        <main>
            <MemoTest id={params.id} images={memoTestImages} number_retries={retries} state={state} />
        </main>
    );
}