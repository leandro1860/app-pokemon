import React from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { customStyles } from './styles/selectCharacter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { listPokemons } from '../../assets/constants/listPokemons';
import { selectedPokemon } from '../../assets/callsApi/callsApi';

const CharacterFinder = () => {
    const callApiError = useSelector((state: any) => state.reducerDataCharacter.callApiError);

    return (
        <div className="flex flex-col items-center w-full">
            <form className="flex flex-col items-center ">
                <div className="bg-white flex justify-center items-center rounded-full shadow-xl w-auto	p-4 m-2">
                    <div className="">
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
            <div className="h-10">
                {' '}
                {callApiError && (
                    <div className="flex justify-center items-center text-red-500">
                        <div>
                            <FontAwesomeIcon className="mr-3" icon={faTimesCircle} />
                        </div>
                        <p className="text-sm"> No encontrado. Intente más tarde.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CharacterFinder;
