import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
    return (
        <div className="flex items-center rounded-full bg-muted-foreground/20 p-4 h-12 w-full gap-2">
        <Search />
      <Input placeholder="Search in Drive" className="h-10 w-full rounded-full" />
      </div>
    )
}

export default SearchBar;