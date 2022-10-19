import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: 'All'
    },
    reducers: {
        changeFilter:(state,action)=>{
            state.filter=action.payload;
        }
    }
});



export const { changeFilter } = filterSlice.actions;