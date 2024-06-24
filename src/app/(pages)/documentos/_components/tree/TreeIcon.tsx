import { FileText, Folder, FolderOpen } from "lucide-react";
import { TreeIconProps } from "../types/TreeViewDocuments";

export const TreeIcon: React.FC<TreeIconProps> = ({ hasChildren, isOpen }) => {
  if (!hasChildren) {
    return <FileText className="text-avb-green-700" />;
  }
  return isOpen ? (
    <FolderOpen className="text-avb-green-700 fill-avb-green-300" />
  ) : (
    <Folder className="text-avb-green-700 fill-avb-green-500" />
  );
};
