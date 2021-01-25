import { DATA_CHARACTER } from '../constants/constant.dataCharacter';

export const updateDataCharacter = (value: boolean, value2: any) => ({
    type: DATA_CHARACTER,
    payload: value,
    payload2: value2,
});
