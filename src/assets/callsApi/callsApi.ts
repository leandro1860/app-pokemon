import axios from 'axios';
import store from '../../store/store';
import { mainItems } from '../../store/actions/action.mainItems';

export const itemSelect = async (items: string) => {
    try {
        const item = await axios.get(`/${items}`);
        store.dispatch(mainItems(item.data));
    } catch (error) {
        console.log(error);
    }
};
