import { OPEN_TYPE_MODAL } from '../constants/constant.typeModal';

const initialState = {
    stateTypeModal: false,
    nameAbility: '',
};

export default function reducerTypeModal(state = initialState, action: any) {
    switch (action.type) {
        case OPEN_TYPE_MODAL:
            return {
                stateTypeModal: action.payload,
                nameAbility: action.payload2,
            };

        default:
            return state;
    }
}
