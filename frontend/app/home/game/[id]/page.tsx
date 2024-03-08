import { MemoTest } from "@/app/ui/components/MemoTest";
import { getMemoTest } from '@/app/lib/graphql-data';

export default async function Page({ params }: { params: { id: string } }) {

    const memoTestData = await getMemoTest(params.id);
    const memoTestImages = JSON.parse(memoTestData["get_memo_test"].images);

    return (
        <main>
            <MemoTest id={params.id} images={memoTestImages} />
        </main>
    );
}