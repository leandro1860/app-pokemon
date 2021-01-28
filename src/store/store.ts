import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerModal from './reducers/reducer.modal';
import reducerDataCharacter from './reducers/reducer.dataCharacter';
import reducerMainItems from './reducers/reducer.mainItems';

const rootReducer = combineReducers({
    reducerModal,
    reducerDataCharacter,
    reducerMainItems,
});

export type typeState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools());
