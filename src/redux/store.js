//Redux
import { configureStore } from "@reduxjs/toolkit";
//Reducers
import tasksReducer from './tasks/tasksSlice';
import darkModeReducer from './darkMode/darkModeSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        darkMode: darkModeReducer,
    }
})