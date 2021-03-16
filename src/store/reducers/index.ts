import { itemReducer } from './itemReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    item: itemReducer
})

export type RootState = ReturnType<typeof rootReducer>