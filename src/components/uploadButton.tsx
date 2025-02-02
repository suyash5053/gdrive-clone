import { Upload } from "lucide-react";
import { Button } from "./ui/button";

const UploadButton = () => {
    const handleButtonClick = () => {
        alert("Wait for the feature Implementation")
    }
    return (
        <Button size={"sm"} variant={"default"} className="flex items-center gap-1" onClick={handleButtonClick}><Upload size={16} /> Upload</Button>
    )
}

export default UploadButton;