import axios from 'axios';
import { Dispatch } from 'react';
import { ItemAction, ItemActionTypes } from './../../types/item';
 
export const fetchItems = () => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionTypes.FETCH_ITEM})
            const response = await axios.get('http://localhost:80/items/all')
            dispatch({type: ItemActionTypes.FETCH_ITEM_SUCCESS, payload: response.data.items})
        } catch (e) { 
            dispatch({type: ItemActionTypes.FETCH_ITEM_ERROR, payload: 'Ошибка при загрузке'})
        }
    }
}