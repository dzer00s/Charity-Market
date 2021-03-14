export interface ItemState {
    items: any[];
    loading: boolean;
    error: null | string;
}
export enum ItemActionTypes {
    FETCH_ITEM = 'FETCH_ITEM',
    FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS',
    FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR',
    ADD_ITEM = 'ADD_ITEM'
}
interface FetchItemAction {
    type: ItemActionTypes.FETCH_ITEM;
}
interface FetchItemSuccessAction {
    type: ItemActionTypes.FETCH_ITEM_SUCCESS;
    payload: any[];
}
interface FetchItemErrorAction {
    type: ItemActionTypes.FETCH_ITEM_ERROR;
    payload: string;
}
interface AddItem {
    type: ItemActionTypes.ADD_ITEM;
    payload?: any[];
    body: string;
    id: Number;
}
export type ItemAction = FetchItemAction | FetchItemSuccessAction | FetchItemErrorAction | AddItem