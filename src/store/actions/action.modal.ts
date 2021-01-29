import { OPEN_MODAL } from '../constants/constant.modal';

export const updateStateModal = (value: boolean) => ({
    type: OPEN_MODAL,
    payload: value,
});
