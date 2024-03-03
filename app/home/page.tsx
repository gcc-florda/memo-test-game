// const memoGames = require('../lib/static-data.js');
import { memoGames } from "../lib/static-data";
import GameCard from "../ui/components/GameCard";

export default function Page() {

    return (
        <main>
            <div className="mt-16 flex justify-center">
                <div className="grid grid-cols-2 gap-20 justify-items-center">
                    <>
                        {memoGames.map((game) => {
                            return (
                                <div key={game.id} className="w-72 mb-10 rounded-lg overflow-hidden">
                                    <div className="bg-gradient-to-b from-blue-200 to-blue-400 p-4">
                                        <GameCard id={game.id} title={game.name} detail={game.detail} img={game.image_url} />
                                    </div>
                                </div>
                            );
                        })}
                    </>
                </div>
            </div>
        </main>
    );
}