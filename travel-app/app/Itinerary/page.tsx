"use client"
import React, { useState } from 'react';
import DateRangeModal from '../components/DateRangeModal';
import AddItemModal from '../components/AddItemModal';

interface ItineraryItem {
    date: string;
    items: string[];
}

const Itinerary: React.FC = () => {
    const [isDateRangeModalOpen, setIsDateRangeModalOpen] = useState<boolean>(false);
    const [isAddItemModalOpen, setIsAddItemModalOpen] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [dateRange, setDateRange] = useState<{ startDate: string, endDate: string } | null>(null);
    const [items, setItems] = useState<ItineraryItem[]>([]);
    const [newItem, setNewItem] = useState<string>('');

    const handleDateRangeSubmit = (startDate: string, endDate: string) => {
        setDateRange({ startDate, endDate });
        setIsDateRangeModalOpen(false);
    };

    const handleAddItemClick = (date: string) => {
        setSelectedDate(date);
        setIsAddItemModalOpen(true);
    };

    const handleAddItemSubmit = (date: string, item: string) => {
        setItems(prevItems => {
            const newItems = prevItems.map(itineraryItem =>
                itineraryItem.date === date
                    ? { ...itineraryItem, items: [...itineraryItem.items, item] }
                    : itineraryItem
            );

            if (!newItems.some(itineraryItem => itineraryItem.date === date)) {
                newItems.push({ date, items: [item] });
            }

            return newItems;
        });
        setNewItem('');
        setIsAddItemModalOpen(false);
    };

    const handleNewItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value);
    };

    const renderDateRange = () => {
        if (!dateRange) return null;

        const start = new Date(dateRange.startDate);
        const end = new Date(dateRange.endDate);
        const dates: { date: string, weekday: string }[] = [];

        for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
            const currentDate = new Date(d);
            const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
            const weekdayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
            dates.push({ date: formattedDate, weekday: weekdayName });
        }

        return (
            <div>
                {dates.map(({ date, weekday }) => (
                    <div key={date} className="relative mb-4 flex items-center group p-4 bg-white rounded-lg shadow-md">
                        <div className="flex-grow">
                            <h3 className="text-lg font-bold">
                                <span className="text-gray-700">{weekday}, </span>
                                <span className="text-gray-900">{date}</span>
                            </h3>
                        </div>
                        <button
                            onClick={() => handleAddItemClick(date)}
                            className="absolute right-0 top-1/2 transform -translate-x-full translate-y-[-50%] py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        >
                            Add Itinerary
                        </button>
                        <ul className="list-disc pl-5 mt-2 text-gray-800">
                            {(items.find(i => i.date === date)?.items || []).map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );

    };

    return (
        <div className="grid grid-cols-3 gap-4 p-4 h-screen text-black">
            {/* Left Column: Date Range and Dates */}
            <div className="col-span-1 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-gray-100 group">
                <button
                    onClick={() => setIsDateRangeModalOpen(true)}
                    className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
                >
                    Add Date Range
                </button>

                {renderDateRange()}
            </div>

            {/* Right Column: Itinerary Items */}
            <div className="col-span-2 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-gray-50">

            </div>

            <DateRangeModal
                isOpen={isDateRangeModalOpen}
                onClose={() => setIsDateRangeModalOpen(false)}
                onSubmit={handleDateRangeSubmit}
            />

            <AddItemModal
                isOpen={isAddItemModalOpen}
                date={selectedDate}
                onClose={() => setIsAddItemModalOpen(false)}
                onSubmit={handleAddItemSubmit}
                value={newItem}
                onChange={handleNewItemChange}
            />
        </div>
    );
};

export default Itinerary;
