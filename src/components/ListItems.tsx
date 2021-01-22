import React from 'react';
import axios from 'axios';

const ListItems = () => {
    const itemSelect = async (items: string) => {
        try {
            const item = await axios.get(`/${items}`);
            console.log(item.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex justify-around flex-wrap">
            <button
                className="flex items-center w-48 h-16 pl-4 mb-6 bg-green-300 rounded-xl"
                onClick={() => itemSelect('pokemon')}
            >
                <p>Pokedex</p>
            </button>
            <button
                className="flex items-center w-48 h-16 pl-4 mb-6 bg-blue-400 rounded-xl"
                onClick={() => itemSelect('ability')}
            >
                <p>Abilities</p>
            </button>
            <button
                className="flex items-center w-48 h-16 pl-4 mb-6  bg-red-500 rounded-xl"
                onClick={() => itemSelect('location')}
            >
                <p>Locations</p>
            </button>
            <button
                className="flex items-center w-48 h-16 pl-4 mb-6 bg-yellow-200 rounded-xl"
                onClick={() => itemSelect('type')}
            >
                <p> Types</p>
            </button>
        </div>
    );
};

export default ListItems;
