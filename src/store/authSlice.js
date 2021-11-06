import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {authApi} from "../api/api";

const initialState = {
    authData: {},
    isAuth: false,
    isLoading: false,
}

export const userLogin = createAsyncThunk(
    'users/userLogin',
    async ({email, password}, thunkAPI) => {
        return await authApi.login(email, password)
    }
)

export const userRegistration = createAsyncThunk(
    'users/userRegistration',
    async ({username, email, password}, thunkAPI) => {
        return await authApi.registration(username, email, password)
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.authData = {};
            state.isAuth = false
        },
    },
    extraReducers: {
        [userLogin.pending]: (state, action) => {
            state.isLoading = true
        },
        [userLogin.fulfilled]: (state, action) => {
            if (!action.payload.message) {
                state.authData = action.payload;
                state.isAuth = true;
                state.isLoading = false
                state.errors =null;
            }
        },
    },
})

export const {logout} = authSlice.actions

export default authSlice.reducer