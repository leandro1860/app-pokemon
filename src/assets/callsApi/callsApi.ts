import axios from 'axios';
import store from '../../store/store';
import { mainItems } from '../../store/actions/action.mainItems';

export const itemSelect = async (items: string) => {
    try {
        const item = await axios.get(`/${items}`);
        console.log(item.data);
        store.dispatch(mainItems(item));
    } catch (error) {
        console.log(error);
    }
};
