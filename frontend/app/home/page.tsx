import { staticMemoGames } from "../lib/static-data";
import GameCard from "../ui/components/GameCard";
import { getCards, getCardsImages } from "../lib/graphql-data";

export default async function Page() {

    // Get cards & images from the db
    const cardsData = await getCards();
    const cardsImagesData = await getCardsImages();

    const graphCards = cardsData["get_memo_tests"];
    const images = cardsImagesData["get_memo_tests"];

    return (
        <main>
            <div className="mt-16 flex justify-center">
                <div className="flex flex-wrap justify-center gap-20 mx-auto mt-20">
                    <>
                        {staticMemoGames.map((game: any) => {
                            return (
                                <div key={game.id} className="w-72 mb-10 rounded-lg overflow-hidden">
                                    <div className="bg-gradient-to-b from-blue-200 to-blue-400 p-4">
                                        <GameCard id={game.id} title={game.name} />
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