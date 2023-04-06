import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchProduct = createAsyncThunk(
    'product/fetchProductStatus', async (params) => {
        const {
            sortBy,
            order,
            category,
            search,
            currentPage
        } = params
        const {
            data
        } = await axios.get(
            `https://6423f5ebd6152a4d48031b38.mockapi.io/products?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}&${search}`);
        return data

    }
)

const initialState = {
    items: [],
    status: 'loading', //loading, success, error
}

export const productSlise = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchProduct.pending]: (state) => {
            state.status = 'loading';
            state.items = []
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success'
        },
        [fetchProduct.rejected]: (state) => {
            state.items = []
            state.status = 'error'
        }
    }
})

export const {
    setItems
} = productSlise.actions;

export default productSlise.reducer