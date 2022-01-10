import { createStore, combineReducers } from 'redux';
// SLICE REDUCER IMPORT
import { cartReducer } from '../features/cart/cartSlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';

// STORE CREATION
export const store = createStore(combineReducers({
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    inventory: inventoryReducer,
    searchTerm: searchTermReducer
}))
