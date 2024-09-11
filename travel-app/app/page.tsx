"use client"
import SearchBar from "@/app/components/SearchBar";
import FlightSearchResults from "@/app/components/FlightSearchResults";
import { useState} from "react";

interface FlightData {
    flight_id: string;
    origin: {
        airport_code: string;
        airport_name: string;
        city: string;
        country: string;
        departure_time: string;
    };
    destination: {
        airport_code: string;
        airport_name: string;
        city: string;
        country: string;
        arrival_time: string;
    };
}


export default function Home() {
    const [flights, setFlights] = useState<FlightData[]>([]);

    const handleSearch = async (query: string) => {
        try {
            const response = await fetch(`http://localhost:8000/api/flights?query=${query}`);
            const data = await response.json();
            setFlights(data.results); // Assuming `results` is an array of flights
        } catch (error) {
            console.error('Error fetching flight data:', error);
            setFlights([]); // Clear flights if there's an error
        }
    };
    return (
        <div className="bg-white grid grid-cols-[1fr,2fr,1fr] gap-4  border-4 text-black">
            <div >
                <div className="text-center">
                    <h1>Blogs</h1>
                </div>dd
                <div>01</div>
                <div>02</div>
            </div>
            <div className="p-4">
                <div className="text-center">
                    <h1>Search Flights</h1>
                    <SearchBar onSearch={handleSearch} />
                </div>
                <div className="text-center ">
                    <FlightSearchResults flights={flights} />
                </div>
            </div>
            <div >
                <div className="text-center">
                    Things to do
                </div>
            </div>
        </div>
    );
}