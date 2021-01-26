import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStateModal } from '../store/actions/action.modal';
import { updateDataCharacter } from '../store/actions/action.dataCharacter';

import axios from 'axios';

const CharacterFinder = () => {
    axios.defaults.baseURL = 'https://pokeapi.co/api/v2';
    const [pokemon, setPokemon] = useState('');
    const [inputValidation, setInputValidation] = useState(false);
    const dispatch = useDispatch();

    const clickPokemon = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const character = await axios.get(`/pokemon/${pokemon}`);
            console.log(character.data);

            const id = await axios.get(`/characteristic/${character.data.id}`);
            setInputValidation(false);
            dispatch(updateDataCharacter(character.data, id.data.descriptions));
            dispatch(updateStateModal(true));
        } catch (error) {
            console.log(error);
            setInputValidation(true);
        }
    };
    return (
        <div>
            <form onSubmit={clickPokemon} className="p-4 flex justify-center ">
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
                        required
                    />
                </div>
            </form>
            {inputValidation === true && (
                <div className="flex justify-center text-red-500">
                    <svg
                        className="w-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Escribe el nombre correctamente
                </div>
            )}
        </div>
    );
};

export default CharacterFinder;
