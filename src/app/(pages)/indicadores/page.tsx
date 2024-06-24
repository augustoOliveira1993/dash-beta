import { Card } from "@/components/ui/CardAvb";

export default function Indicadores() {
  return (
    <div className=" grid grid-cols-5 gap-4">
      {Array.from({ length: 23 }).map((_, index) => (
        <Card
          key={index}
          className="min-h-40  flex items-center justify-center"
        >
          <h1>Page indicadores</h1>
        </Card>
      ))}
    </div>
  );
}
