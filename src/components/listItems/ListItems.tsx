import React from 'react';
import { Link } from 'react-router-dom';
import { itemSelect } from '../../assets/callsApi/callsApi';

const ListItems = () => {
    return (
        <div className="flex justify-around flex-wrap mt-6">
            <Link
                to="/pokedex"
                className="flex items-center w-48 h-16 pl-4 mb-6 bg-green-300 rounded-xl"
                onClick={() => itemSelect('pokemon')}
            >
                <p>Pokedex</p>
            </Link>
            <Link
                to="/abilities"
                className="flex items-center w-48 h-16 pl-4 mb-6 bg-blue-400 rounded-xl"
                onClick={() => itemSelect('ability')}
            >
                <p>Abilities</p>
            </Link>
            <Link
                to="/locations"
                className="flex items-center w-48 h-16 pl-4 mb-6  bg-red-500 rounded-xl"
                onClick={() => itemSelect('location')}
            >
                <p>Locations</p>
            </Link>
            <Link
                to="/types"
                className="flex items-center w-48 h-16 pl-4 mb-6 bg-yellow-200 rounded-xl"
                onClick={() => itemSelect('type')}
            >
                <p>Types</p>
            </Link>
        </div>
    );
};

export default ListItems;
