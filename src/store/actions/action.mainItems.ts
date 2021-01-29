import { MAIN_ITEMS } from '../constants/constant.mainItems';

export const mainItems = (value: any) => ({
    type: MAIN_ITEMS,
    payload: value,
});
