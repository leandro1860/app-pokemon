import { DATA_CHARACTER } from '../constants/constant.dataCharacter';
import { CALL_ERROR } from '../constants/constant.dataCharacter';

const initialState = {
    dataCharacter: [],
    callApiError: false,
};

export default function reducerDataCharacter(state = initialState, action: any) {
    switch (action.type) {
        case DATA_CHARACTER:
            return {
                ...state,
                dataCharacter: action.payload,
            };

        case CALL_ERROR:
            return {
                ...state,
                callApiError: action.payload,
            };

        default:
            return state;
    }
}
