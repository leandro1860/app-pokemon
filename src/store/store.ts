import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerModal from './reducers/reducer.modal';
import reducerDataCharacter from './reducers/reducer.dataCharacter';
import reducerTypeModal from './reducers/reducer.typeModal';
import reducerPokemonAbility from './reducers/reducer.pokemonAbility';

const rootReducer = combineReducers({
    reducerModal,
    reducerDataCharacter,
    reducerTypeModal,
    reducerPokemonAbility,
});

export type typeState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools());
