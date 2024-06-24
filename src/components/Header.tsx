"use client";

import { Button } from "@/components/ui/ButtonAvb";
import { ArrowLeft, Undo2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const PagesHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0">
      <div className="min-h-14 flex items-center justify-between px-10 ">
        <div className="flex items-center gap-1 text-avb-green-600">
          {pathname !== "/" && (
            <Button variant="link" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="size-4" />
            </Button>
          )}
          <h4 className="capitalize font-bold text-foregroundtext-avb-green-600">
            {pathname.split("/").pop()}
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Sair</Button>
        </div>
      </div>
    </header>
  );
};
