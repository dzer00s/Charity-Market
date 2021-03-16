export interface ItemState {
    items: any[];
    loading: boolean;
    error: null | string;
}
export enum ItemActionTypes {
    FETCH_ITEM = 'FETCH_ITEM',
    FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS',
    FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR',
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

export type ItemAction = FetchItemAction | FetchItemSuccessAction | FetchItemErrorAction