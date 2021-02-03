import { OPEN_TYPE_MODAL } from '../constants/constant.typeModal';

export const updateStateTypeModal = (value: boolean, value2: string) => ({
    type: OPEN_TYPE_MODAL,
    payload: value,
    payload2: value2,
});
