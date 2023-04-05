import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './slices/FilterSlise';
import cartReducer from './slices/CartSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer
    }
})