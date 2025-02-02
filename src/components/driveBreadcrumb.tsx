
import { type Folder } from "lib/helpers";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";
import UploadButton from "./uploadButton";

interface DriveBreadcrumbProps {
    breadcrumbs: Folder[];
    onClick : (index: number) => void;
}

const DriveBreadcrumb = ({breadcrumbs, onClick}: DriveBreadcrumbProps) => {
    return (
        <div className="w-full flex justify-between items-center">
        <Breadcrumb className="w-full">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#" onClick={() => onClick(-1)} className="text-text-background/80 hover:text-white">My Drive</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {breadcrumbs.map((folder, index) => (
                    <div key={folder.id} className="flex items-center gap-1">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#" onClick={() => onClick(index)}>{folder.name}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    </div>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
        <UploadButton />
        </div>
    )
}

export default DriveBreadcrumb;