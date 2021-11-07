import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {categoryApi} from "../api/api";

const initialState = {
    categoryList: [],
    errors: null,
    isLoading: null,
}

export const setCategories = createAsyncThunk(
    'users/setCategories',
    async (userId, thunkAPI) => {
        return await categoryApi.getAll(userId)
    }
)

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categoryList.push(action.payload);
        },
        deleteCategory: (state, action) => {
            state.categoryList = state.categoryList.filter(category => category.id !== action.payload);
        },
    },
    extraReducers: {
        [setCategories.pending]: (state) => {
            state.isLoading = true
        },
        [setCategories.fulfilled]: (state, action) => {
            if (action.payload.message) {
                state.errors = action.payload.message;
            } else {
                state.categoryList = action.payload;
                state.isLoading = false
            }
        },
    }
})

export const { addCategory, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;