
import SearchBar from "~/components/searchBar";
import ContentSection from "~/components/contentSection";


export default function HomePage() {
  
  return (
    <main className="min-h-screen flex flex-col p-2 bg-foreground text-secondary gap-4">
      <SearchBar />
      <ContentSection />
    </main>
  );
}
