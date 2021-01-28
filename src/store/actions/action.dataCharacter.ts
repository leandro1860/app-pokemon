import { DATA_CHARACTER } from '../constants/constant.dataCharacter';

export const updateDataCharacter = (value: any) => ({
    type: DATA_CHARACTER,
    payload: value,
});
