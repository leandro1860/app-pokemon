import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerModal from './reducers/reducer.modal';
import reducerDataCharacter from './reducers/reducer.dataCharacter';

const rootReducer = combineReducers({
    reducerModal,
    reducerDataCharacter,
});

export default createStore(rootReducer, composeWithDevTools());
