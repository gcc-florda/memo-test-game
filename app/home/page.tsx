// const memoGames = require('../lib/static-data.js');
import { memoGames } from "../lib/static-data";
import Typography from '@mui/material/Typography';

export default async function Page() {

    return (
        <main>
            <>
                {memoGames.map((game) => {
                    return (
                        <div key={game.id}>
                            <Typography className="font-normal text-white" variant="h5" gutterBottom>
                                {game.name}
                            </Typography>
                        </div>
                    );
                })}
            </>
        </main>
    );
}