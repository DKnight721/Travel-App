import React, { useState, useEffect } from 'react';

const ThingsToDoSearch: React.FC = () => {
    const [destination, setDestination] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cse.google.com/cse.js?cx=76b61b3918b9d4435"; // Your CSE script
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const searchBox = document.querySelector('.gsc-input');
        if (searchBox) {
            // Prepend "top things to do" to the search query
            (searchBox as HTMLInputElement).value = `top things to do ${destination}`;
        }
        // Trigger Google CSE search
        const searchButton = document.querySelector('.gsc-search-button');
        if (searchButton) {
            (searchButton as HTMLElement).click();
        }
    };

    return (
        <div className="p-6">
            {/* Flight destination input */}
            <form onSubmit={handleSearch} className="space-y-4">
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                    Enter Flight Destination
                </label>
                <input
                    type="text"
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter a destination"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Search Things to Do
                </button>
            </form>

            {/* Google Custom Search Engine Elements */}
            <div className="mt-6">
                {/* The search box will be rendered here */}
                <div className="gcse-searchbox-only" data-resultsUrl="#results"></div>

                {/* The search results will be displayed here */}
                <div id="results" className="mt-4"></div>
            </div>
        </div>
    );
};

export default ThingsToDoSearch;
