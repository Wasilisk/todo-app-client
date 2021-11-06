import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {taskApi} from "../api/api";

const initialState = {
    taskList: [],
    errors: null,
    isLoading: null,
}

export const setTasks = createAsyncThunk(
    'users/setTasks',
    async (userId, thunkAPI) => {
        return await taskApi.getAll(userId)
    }
)

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.taskList.push(action.payload);
        },
        updateTask: (state, action) => {
            state.taskList.map(task => {
                if(task.id === action.payload.taskId) {
                    task = action.payload.updatedTask;
                }
            })
        },
        deleteTask: (state, action) => {
            state.taskList.filter(task => task.id !== action.payload.taskId);
        },
    },
    extraReducers: {
        [setTasks.pending]: (state, action) => {
            state.isLoading = true
        },
        [setTasks.fulfilled]: (state, action) => {
            if (action.payload.message) {
                state.errors = action.payload.message;
            } else {
                state.taskList = action.payload;
                state.isLoading = false
            }
        },
    }
})

export const {addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;