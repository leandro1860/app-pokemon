import { POKEMON_ABILITY } from '../constants/constant.pokemonAbility';

const initialState = {
    pokemonAbilities: [{}],
};

export default function reducerPokemonAbility(state = initialState, action: any) {
    switch (action.type) {
        case POKEMON_ABILITY:
            return {
                pokemonAbilities: action.payload,
            };

        default:
            return state;
    }
}
