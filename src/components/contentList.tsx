import { type Folder as FolderType, type Item } from "lib/helpers";
import { FileIcon, Folder } from "lucide-react";
import Link from "next/link";

interface ContentListProps {
    items: Item[];
    onFolderClick: (folder: FolderType) => void;
}

const ContentList = ({items, onFolderClick}: ContentListProps) => {
    return (
        <div className="w-full flex flex-col gap-2 p-2 bg-inherit">
            {items.map(item => (
                <div key={item.id} className="flex items-center hover:bg-muted-foreground/20 p-2 rounded-full">
                    {item.type === "folder" ? (
                        <>
                        <Link href="#" onClick={(e) => {e.preventDefault(); onFolderClick(item)}} className="flex gap-1 items-center">
                        <Folder size={16}/> {item.name}
                        </Link>
                        </>
                    ) : (
                        <>
                            <Link href={item.url} target="_blank" className="flex gap-1 items-center">
                                <FileIcon size={16}/> {item.name}
                            </Link>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ContentList;