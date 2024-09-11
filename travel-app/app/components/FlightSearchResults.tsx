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

interface FlightResultsProps {
    flights: FlightData[]; // Array of flight data
}

const FlightSearchResults: React.FC<FlightResultsProps> = ({flights}) => {
    return (
        <div>
            {flights.length > 0 ? (
                flights.map((flight) => (
                    <div key={flight.flight_id}
                         className="mb-6 p-6 border border-gray-200 rounded-xl bg-gray-400 ">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="text-lg font-semibold">{flight.origin.city} To: {flight.destination.city}</h2>
                                <p className="text-sm text-gray-600">{flight.origin.airport_name} ({flight.origin.airport_code})
                                    to {flight.destination.airport_name} ({flight.destination.airport_code})</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 mb-6 items-center">
                            <div className="flex flex-col items-center">
                                <h3 className="text-sm font-medium text-gray-800">Origin</h3>
                                <p className="text-sm text-gray-700">{flight.origin.city}, {flight.origin.country}</p>
                            </div>

                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="w-6 h-6 text-gray-500">
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 1-11-4.69v.447a3.5 3.5 0 0 0 1.025 2.475L8.293 10 8 10.293a1 1 0 0 0 0 1.414l1.06 1.06a1.5 1.5 0 0 1 .44 1.061v.363a1 1 0 0 0 .553.894l.276.139a1 1 0 0 0 1.342-.448l1.454-2.908a1.5 1.5 0 0 0-.281-1.731l-.772-.772a1 1 0 0 0-1.023-.242l-.384.128a.5.5 0 0 1-.606-.25l-.296-.592a.481.481 0 0 1 .646-.646l.262.131a1 1 0 0 0 .447.106h.188a1 1 0 0 0 .949-1.316l-.068-.204a.5.5 0 0 1 .149-.538l1.44-1.234A6.492 6.492 0 0 1 16.5 10Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>

                            <div className="flex flex-col items-center">
                                <h3 className="text-sm font-medium text-gray-800">Destination</h3>
                                <p className="text-sm text-gray-700">{flight.destination.city}, {flight.destination.country}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="text-sm text-gray-600">Departure Time</h4>
                                <p className="text-sm font-semibold">{new Date(flight.origin.departure_time).toLocaleString()}</p>
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-600">Arrival Time</h4>
                                <p className="text-sm font-semibold">{new Date(flight.destination.arrival_time).toLocaleString()}</p>
                            </div>
                            <button
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Book Now
                            </button>
                        </div>
                    </div>

                ))
            ) : (
                <p>No flights found.</p>
            )}
        </div>
    );
};

export default FlightSearchResults;
