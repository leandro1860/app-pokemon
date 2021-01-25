import { DATA_CHARACTER } from '../constants/constant.dataCharacter';

const initialState = {
    dataCharacter: [],
    characteristicsCharacter: [],
};

export default function reducerDataCharacter(state = initialState, action: any) {
    switch (action.type) {
        case DATA_CHARACTER:
            return {
                dataCharacter: action.payload,
                characteristicsCharacter: action.payload2,
            };

        default:
            return state;
    }
}
