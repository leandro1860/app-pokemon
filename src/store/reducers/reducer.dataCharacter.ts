import { DATA_CHARACTER } from '../constants/constant.dataCharacter';

const initialState = {
    dataCharacter: [],
};

export default function reducerDataCharacter(state = initialState, action: any) {
    switch (action.type) {
        case DATA_CHARACTER:
            return {
                dataCharacter: action.payload,
            };

        default:
            return state;
    }
}
