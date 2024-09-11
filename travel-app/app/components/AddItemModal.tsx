import React, { ChangeEvent, FormEvent } from 'react';

interface AddItemModalProps {
    isOpen: boolean;
    date: string;
    onClose: () => void;
    onSubmit: (date: string, item: string) => void;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({ isOpen, date, onClose, onSubmit, value, onChange }) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(date, value);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-lg font-bold mb-4">Add Item for {date}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                        placeholder="Enter new item"
                        autoFocus
                        required
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

export default AddItemModal;
