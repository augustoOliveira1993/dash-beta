import { Input } from "@/components/ui/InputAvb";
import { TreeView } from "./_components/tree/TreeViewDocumets";
import { Search } from "lucide-react";

export interface TreeNodeProps {
  name: string;
  children?: TreeNodeProps[];
}

export default function Documentos() {
  const initialDocuments: any = {
    name: "Documentos",
    children: [
      { name: "empty_folder" },
      {
        name: "public",
        children: [{ name: "index.html" }, { name: "favicon.ico" }],
      },
      {
        name: "src",
        children: [
          { name: "App.css" },
          { name: "App.js" },
          {
            name: "components",
            children: [
              {
                name: "ComponentA.js",
                children: [
                  {
                    name: "kaesyo",
                    children: [
                      {
                        name: "felix",
                      },
                      {
                        name: "felix",
                      },
                      {
                        name: "felix",
                      },
                      {
                        name: "felix",
                      },
                      {
                        name: "felix",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "package.json",
        children: [
          {
            name: "kaesyo",
            children: [
              {
                name: "felix",
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <main>
      <div className="space-y-4">
        <div className="relative w-fit">
          <Input placeholder="Buscar arquivos" className="max-w-60 " />
          <Search className="size-4 absolute right-2 top-3" />
        </div>
        <TreeView node={initialDocuments} />
      </div>
    </main>
  );
}
