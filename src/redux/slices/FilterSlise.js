import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    searchValue: '',
    currentPage: 1,
    sort: {
        name: 'Цене (дороже)',
        sortProperty: 'price'
      }
}

export const filterSlise = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
}) 

export const {setCategoryId, setSort, setCurrentPage, setSearchValue } = filterSlise.actions;

export default filterSlise.reducer
