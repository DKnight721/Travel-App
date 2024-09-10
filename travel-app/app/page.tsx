"use client"
import SearchBar from "@/app/components/SearchBar";

export default function Home() {
    return (
        <div className="grid grid-cols-[1fr,2fr,1fr] gap-4 border border-blue-500">
            <div className="border-r border-blue-500 p-4">
                <div className="text-center">
                    <h1>Blogs</h1>
                </div>
                <div>01</div>
                <div>02</div>
            </div>
            <div className="p-4">
                <div className="text-center">
                    <h1>Search Flights</h1>
                    <SearchBar onSearch={() => console.log("search")} />
                </div>
            </div>
            <div className="border-l border-blue-500 p-4">
                <div className="text-center">
                    Things to do
                </div>
            </div>
        </div>
    );
}