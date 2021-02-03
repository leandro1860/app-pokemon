import { POKEMON_ABILITY } from '../constants/constant.pokemonAbility';

export const pokemonAbility = (value: any) => ({
    type: POKEMON_ABILITY,
    payload: value,
});
