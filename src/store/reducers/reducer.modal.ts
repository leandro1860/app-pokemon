import { OPEN_MODAL } from '../constants/constant.modal';

const initialState = {
    stateModal: false,
};

export default function reducerModal(state = initialState, action: any) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                stateModal: action.payload,
            };

        default:
            return state;
    }
}
