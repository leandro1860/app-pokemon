import { MAIN_ITEMS } from '../constants/constant.mainItems';

const initialState = {
    mainItems: [],
};

export default function reducerMainItems(state = initialState, action: any) {
    switch (action.type) {
        case MAIN_ITEMS:
            return {
                mainItems: action.payload,
            };

        default:
            return state;
    }
}
