import React from 'react';
import { Link } from 'react-router-dom';
import { itemSelect } from '../../assets/callsApi/callsApi';

const ListItems = () => {
    return (
        <div className="flex justify-around flex-wrap mt-6">
            <Link
                to="/pokemons"
                className="flex items-center w-48 h-16 pl-4 m-3 bg-green-300 rounded-xl"
            >
                <p>Pokemons</p>
            </Link>
            <Link
                to="/types"
                className="flex items-center w-48 h-16 pl-4 m-3 bg-yellow-200 rounded-xl"
                onClick={() => itemSelect('type')}
            >
                <p>Types</p>
            </Link>
        </div>
    );
};

export default ListItems;
