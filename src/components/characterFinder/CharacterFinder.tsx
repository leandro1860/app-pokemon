import React from 'react';
import Select, { ValueType } from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { customStyles } from './styles/selectCharacter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { listPokemons } from '../../assets/constants/listPokemons';
import { selectedPokemon } from '../../assets/callsApi/callsApi';
import { callApiError } from '../../store/actions/action.dataCharacter';
import { typeState } from '../../store/store';
import { Value } from './types';

const CharacterFinder = () => {
    const dispatch = useDispatch();
    const errorApi = useSelector((state: typeState) => state.reducerDataCharacter.callApiError);

    const conditionSelectedPokemon = (value: ValueType<Value, false>) => {
        value ? selectedPokemon(value) : dispatch(callApiError(false));
    };

    return (
        <div className="flex flex-col items-center w-full">
            <form className="flex flex-col items-center">
                <div className="bg-white flex justify-center items-center rounded-full shadow-xl w-auto	p-4 m-2">
                    <div>
                        <div className="bg-blue-500 text-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                    <Select
                        styles={customStyles}
                        classNamePrefix="select"
                        options={listPokemons}
                        onChange={conditionSelectedPokemon}
                        placeholder={'Choose a character..'}
                        isClearable
                    />{' '}
                </div>
            </form>
            <div className="h-10">
                {' '}
                {errorApi && (
                    <div className="flex justify-center items-center text-red-500">
                        <div>
                            <FontAwesomeIcon className="mr-3" icon={faTimesCircle} />
                        </div>
                        <p className="text-sm">Not found. Please try again later.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CharacterFinder;
