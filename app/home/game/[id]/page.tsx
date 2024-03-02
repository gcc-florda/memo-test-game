import { GameGrid } from "@/app/ui/components/Grid";

export default function Page({ params }: { params: { id: string } }) {
    // const cards = getCards(id);

    return (
        <main>
            <GameGrid id={params.id} />
        </main>
    );
}