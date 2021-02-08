import axios from 'axios';
import store from '../../store/store';
import { ValueType } from 'react-select';
import { Value } from '../../components/CharacterFinder/types';
import { updateStateModal } from '../../store/actions/action.modal';
import { updateDataCharacter } from '../../store/actions/action.dataCharacter';
import { callApiError } from '../../store/actions/action.dataCharacter';

export const selectedPokemon = async (value: ValueType<Value, false>) => {
    try {
        axios.defaults.baseURL = 'https://pokeapi.co/api/v2';
        const character = await axios.get(`/pokemon/${value ? value.label : null}`);
        store.dispatch(updateDataCharacter(character.data));
        store.dispatch(updateStateModal(true));
        store.dispatch(callApiError(false));
    } catch (error) {
        console.log(error);
        store.dispatch(callApiError(true));
    }
};
