import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/CardAvb";
import CARDIMAGE from "@/assets/cardImage.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/ButtonAvb";
import { ThermometerIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4 ">
      {Array.from({ length: 11 }).map((_, index) => (
        <Card
          key={index}
          className="group w-full relative h-auto aspect-video overflow-hidden  flex items-center justify-center cursor-pointer"
        >
          <Image
            src={CARDIMAGE}
            alt="CARDIMAGE"
            className=" h-full w-full rounded-md"
          />
          <CardFooter className="absolute bottom-0 h-2/5 transition-all  pb-0 w-full bg-avb-green-600 flex justify-between items-center px-2 ">
            <CardTitle className="text-xs text-zinc-100 flex gap-1 items-center">
              <ThermometerIcon className="size-4" />
              <span>Temperatura Gaiolas</span>
            </CardTitle>
            <Button
              variant="secondary"
              className="h-6 px-2 items-center text-xs text-zinc-100 rounded-sm bg-avb-green-500 hover:bg-avb-green-500/50"
            >
              Acessar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
