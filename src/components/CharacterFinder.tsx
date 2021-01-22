import React, { useState } from 'react';
import axios from 'axios';

const CharacterFinder = () => {
    const [pokemon, setPokemon] = useState('');

    const clickPokemon = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const character = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            console.log(character.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form onSubmit={clickPokemon} className="p-4 flex justify-center">
            <div className="bg-white flex items-center rounded-full shadow-xl w-96">
                <div className="p-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
                <input
                    className="rounded-l-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                    id="search"
                    type="text"
                    placeholder="Buscar Pokemon..."
                    onChange={(e) => setPokemon(e.target.value)}
                />
            </div>
        </form>
    );
};

export default CharacterFinder;
