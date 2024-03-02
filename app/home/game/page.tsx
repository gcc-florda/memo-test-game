import { GameGrid } from "@/app/ui/components/Grid";

export default function Page({ id }: { id: string }) {
    // const cards = getCards(id);

    return (
        <main>
            <GameGrid />
        </main>
    );
}