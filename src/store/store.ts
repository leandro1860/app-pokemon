import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducerModal from './reducers/reducer.modal';

const rootReducer = combineReducers({
    reducerModal: reducerModal,
});

export default createStore(rootReducer, composeWithDevTools());
