import React, { useState } from 'react';
import Select, { ValueType } from 'react-select';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { customStyles } from './styles/selectCharacter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { updateStateModal } from '../../store/actions/action.modal';
import { updateDataCharacter } from '../../store/actions/action.dataCharacter';
import { listPokemons } from '../../assets/constants/listPokemons';
import { Value } from './types';

const CharacterFinder = () => {
    axios.defaults.baseURL = 'https://pokeapi.co/api/v2';
    const [inputValidation, setInputValidation] = useState(false);
    const dispatch = useDispatch();
    const selectedPokemon = async (value: ValueType<Value, false>) => {
        try {
            const character = await axios.get(`/pokemon/${value ? value.label : null}`);
            dispatch(updateDataCharacter(character.data));
            dispatch(updateStateModal(true));
        } catch (error) {
            console.log(error);
            value ? setInputValidation(true) : null;
        }
    };

    return (
        <div className="flex flex-col">
            <form className="p-4 flex justify-center ">
                <div className="bg-white flex justify-center items-center rounded-full shadow-xl w-96">
                    <div className="py-4 mr-4">
                        <div className="bg-blue-500 text-white rounded-full p-2  w-12 h-12 flex items-center justify-center">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <Select
                        styles={customStyles}
                        classNamePrefix="select"
                        options={listPokemons}
                        onChange={selectedPokemon}
                        placeholder={'Elija un personaje..'}
                        isClearable
                    />{' '}
                </div>
            </form>
            {inputValidation && (
                <div className="flex justify-center content-center text-red-500">
                    <div>
                        <FontAwesomeIcon className="mr-3" icon={faTimesCircle} />
                    </div>
                    <p> Pokémon no encontrado. Vuelva a intentar más tarde.</p>
                </div>
            )}
        </div>
    );
};

export default CharacterFinder;
