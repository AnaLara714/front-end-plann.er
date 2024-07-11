import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6 ">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-00 text-medium">
              Jessica White
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              jessica.white44@gmail.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-00 text-medium">
              Dr. Rita Mendes
            </span>
            <span className="block text-sm text-zinc-400 truncate ">
              lacy.stiedeman@gmail.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <Button size="full" variant="secondary">
        <UserCog className="size-5 " />
        Cadastrar novo link
      </Button>
    </div>
  );
}