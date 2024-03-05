import { MemoTest } from "@/app/ui/components/MemoTest";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <main>
            <MemoTest id={params.id} />
        </main>
    );
}