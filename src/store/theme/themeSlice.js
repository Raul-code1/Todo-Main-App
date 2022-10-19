import { createSlice } from '@reduxjs/toolkit';


const localTheme=localStorage.getItem('theme')!==null ?JSON.parse(localStorage.getItem('theme')) :false

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: localTheme
    },
    reducers: {
        toggleTheme: (state ) => {
            state.darkMode = !state.darkMode;
        },
    }
});



export const { toggleTheme } = themeSlice.actions;