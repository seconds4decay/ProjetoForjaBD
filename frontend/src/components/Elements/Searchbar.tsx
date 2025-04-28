import Image from "next/image";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}
  
export default function SearchBar({ onSearch }: SearchBarProps) {

return (
    <div className="flex justify-center my-4">
    <Image src="/icons/glass.svg" width={35} height={35} alt="search"></Image><input
        type="text"
        placeholder="Pesquisar..."
        onInput={(e) => onSearch((e.target as HTMLInputElement).value)}
        className="p-2 border rounded-full w-[90%] bg-[var(--background2)] text-[var(--textcolor)]"
    />
    </div>
);
}