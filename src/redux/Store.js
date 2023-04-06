import {
    configureStore
} from '@reduxjs/toolkit';
import filterReducer from './slices/FilterSlise';
import cartReducer from './slices/CartSlice';
import productReducer from './slices/ProductSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        product: productReducer,
    }
})