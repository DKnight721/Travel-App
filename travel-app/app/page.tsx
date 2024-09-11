"use client"
import SearchBar from "@/app/components/SearchBar";
import FlightSearchResults from "@/app/components/FlightSearchResults";
import React, { useState} from "react";
import FlightSearch from "@/app/components/FlightSearch";
import ThingsToDo from "@/app/components/ThingsToDo";
import Link from 'next/link'

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
            const response = await fetch(`http://localhost:8000/api/flights?${query}`);
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
                </div>dd
                <div>
                    <Link href={"/Itinerary"}>Itinerary</Link>
                </div>
                <div>02</div>
            </div>
            <div className="p-4">
                <div className="text-center">
                    <h1>Search Flights</h1>
                    <FlightSearch onSearch={handleSearch} />
                </div>
                <div className="text-center ">
                    <FlightSearchResults flights={flights} />
                </div>
            </div>
            <div >
                <div className="text-center">
                    <ThingsToDo/>
                    <div className="gcse-search"></div>
                </div>
            </div>
        </div>
    );
}