import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filter/filterSlice";
import { themeSlice } from "./theme/themeSlice";
import { todosSlice } from "./todos/todosSlice";


export const store= configureStore({
    reducer:{
        todos:todosSlice.reducer,
        filter:filterSlice.reducer,
        theme:themeSlice.reducer
    }
})