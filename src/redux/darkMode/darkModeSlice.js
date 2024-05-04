import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.value = !state.value;
        }
    }
})

export function tasksThemes(isDarkMode) {
    isDarkMode ? localStorage.setItem('theme', "dark") : localStorage.setItem('theme', "light")
    return isDarkMode ? "dark" : "light"
}
export const { toggleDarkMode, } = darkModeSlice.actions;
export default darkModeSlice.reducer;