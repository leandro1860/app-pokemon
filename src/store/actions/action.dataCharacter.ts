import { DATA_CHARACTER } from '../constants/constant.dataCharacter';
import { CALL_ERROR } from '../constants/constant.dataCharacter';

export const updateDataCharacter = (value: any) => ({
    type: DATA_CHARACTER,
    payload: value,
});

export const callApiError = (value: any) => ({
    type: CALL_ERROR,
    payload: value,
});
