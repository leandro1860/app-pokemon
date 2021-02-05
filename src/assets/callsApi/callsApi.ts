/* eslint-disable no-unused-vars */
import axios from 'axios';
import store from '../../store/store';
import { mainItems } from '../../store/actions/action.mainItems';
import { ValueType } from 'react-select';
import { Value } from '../../components/characterFinder/types';
import { updateStateModal } from '../../store/actions/action.modal';
import { updateDataCharacter } from '../../store/actions/action.dataCharacter';
import { callApiError } from '../../store/actions/action.dataCharacter';

export const itemSelect = async (items: string) => {
    try {
        const item = await axios.get(`/${items}`);
        store.dispatch(mainItems(item.data));
    } catch (error) {
        console.log(error);
    }
};

export const selectedPokemon = async (value: any) => {
    try {
        axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

        const character = await axios.get(`/pokemon/${value.label ? value.label : value}`);
        store.dispatch(updateDataCharacter(character.data));
        store.dispatch(updateStateModal(true));
    } catch (error) {
        console.log(error);
        store.dispatch(callApiError(true));
    }
};
