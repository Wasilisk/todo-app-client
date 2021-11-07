import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authSlice";
import taskReducer from "./taskSlice"
import categoryReducer from "./categorySlice"

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('store', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('store');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const persistedStore = {
    ...loadFromLocalStorage()
}

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: taskReducer,
        categories: categoryReducer
    },
    preloadedState: persistedStore
},)

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});