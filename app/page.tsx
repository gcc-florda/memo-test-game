import Link from "next/link";
import GameForm from "@/app/ui/components/GameForm"
import PsychologyIcon from '@mui/icons-material/Psychology';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <main>
      <div>
        <div className="flex justify-center mt-6">
          <Link href={"/"}>
            <Typography className="font-normal text-white" variant="h1" gutterBottom>
              MemoTest Game
            </Typography>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center m-40">
        <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-2.5 p-4 md:-mt-32 border-4 border-indigo-500/75">
          <div className="flex w-full items-end rounded-lg bg-violet-700 p-3 md:h-36">
            <div className="w-32 text-white md:w-36">
              <Link href='/'>
                <PsychologyIcon sx={{ fontSize: 70 }} />
              </Link>
            </div>
          </div>
          <GameForm />
        </div>
      </div>
    </main >
  );
}