import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { customStyles } from './styles/selectCharacter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { updateStateModal } from '../../store/actions/action.modal';
import { updateDataCharacter } from '../../store/actions/action.dataCharacter';
import { listPokemons } from '../../assets/constants/listPokemons';

const CharacterFinder = () => {
    axios.defaults.baseURL = 'https://pokeapi.co/api/v2';
    const [inputValidation, setInputValidation] = useState(false);
    const dispatch = useDispatch();

    const selectedPokemon = async (value: any) => {
        try {
            const character = await axios.get(`/pokemon/${value.label}`);
            const id = await axios.get(`/characteristic/${character.data.id}`);
            setInputValidation(false);
            dispatch(updateDataCharacter(character.data, id.data.descriptions));
            dispatch(updateStateModal(true));
        } catch (error) {
            console.log(error);
            value !== null ? setInputValidation(true) : null;
        }
    };

    return (
        <div>
            <form className="p-4 flex justify-center ">
                <div className="bg-white flex justify-center items-center rounded-full shadow-xl w-96">
                    <div className="py-4 mr-4">
                        <div className="bg-blue-500 text-white rounded-full p-2  w-12 h-12 flex items-center justify-center">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <Select
                        styles={customStyles}
                        name="color"
                        options={listPokemons}
                        onChange={selectedPokemon}
                        placeholder={'Elija un pokémon..'}
                        isClearable
                    />{' '}
                </div>
            </form>
            {inputValidation === true && (
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
