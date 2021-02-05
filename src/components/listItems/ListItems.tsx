import React from 'react';
import { Link } from 'react-router-dom';

const ListItems = () => {
    return (
        <div className="flex justify-around flex-wrap mt-6">
            <Link
                to="/pokemons"
                className="flex items-center justify-center w-48 h-16 m-3 bg-green-300 rounded-b-2xl rounded-l-2xl"
            >
                <p className="font-semibold text-2xl">Pokemons</p>
            </Link>
            <Link
                to="/types"
                className="flex items-center justify-center w-48 h-16 m-3 bg-yellow-200 rounded-b-2xl rounded-r-2xl"
            >
                <p className="font-semibold text-2xl">Types</p>
            </Link>
        </div>
    );
};

export default ListItems;
