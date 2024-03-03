import { MemoTest } from "@/app/ui/components/MemoTest";

export default function Page({ params }: { params: { id: string } }) {
    // const cards = getCards(id);

    return (
        <main>
            <MemoTest id={params.id} />
        </main>
    );
}