import React, { FormEvent, useState } from "react";

interface FlightSearchProps {
    onSearch: (query: string) => void; // Function to handle search
}

const FlightSearch: React.FC<FlightSearchProps> = ({ onSearch }) => {
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [passengers, setPassengers] = useState(1);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Construct a query string from the form inputs
        const query = `departure=${departure}&arrival=${arrival}&departureDate=${departureDate}&returnDate=${returnDate}&passengers=${passengers}`;

        onSearch(query); // Pass the constructed query string to the onSearch function
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto space-y-4"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Departure */}
                <div>
                    <label htmlFor="departure" className="block text-sm font-medium text-gray-700">
                        Departure
                    </label>
                    <input
                        type="text"
                        id="departure"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                        placeholder="City or airport"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Arrival */}
                <div>
                    <label htmlFor="arrival" className="block text-sm font-medium text-gray-700">
                        Arrival
                    </label>
                    <input
                        type="text"
                        id="arrival"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                        placeholder="City or airport"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Departure Date */}
                <div>
                    <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">
                        Departure Date
                    </label>
                    <input
                        type="date"
                        id="departureDate"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Return Date */}
                <div>
                    <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">
                        Return Date
                    </label>
                    <input
                        type="date"
                        id="returnDate"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Passengers */}
                <div>
                    <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">
                        Passengers
                    </label>
                    <input
                        type="number"
                        id="passengers"
                        value={passengers}
                        onChange={(e) => setPassengers(Number(e.target.value))}
                        min="1"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Search Flights
                </button>
            </div>
        </form>
    );
};

export default FlightSearch;
