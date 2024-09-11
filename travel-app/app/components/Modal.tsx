import React, { ChangeEvent, FormEvent } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, onChange, value }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-lg font-bold mb-4">Add Itinerary Item</h2>
                <form onSubmit={onSubmit}>

                    <div>
                        <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <input
                            type="date"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                        placeholder="Enter new item"
                        autoFocus
                    />
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
