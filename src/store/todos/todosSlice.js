import { createSlice } from '@reduxjs/toolkit';

const localsTodos=localStorage.getItem('todos')!==null ?JSON.parse(localStorage.getItem('todos')) :[]

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos:localsTodos
    },
    reducers: {
        addNewTodo:(state,action)=>{
            state.todos.push(action.payload)

            localStorage.setItem('todos',JSON.stringify(state.todos.map(todo=>todo)));
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
            localStorage.setItem('todos',JSON.stringify(state.todos.map(todo=>todo)));
        },
        completeTodo:(state,action)=>{
            state.todos.map(todo=>{
                if(todo.id===action.payload){
                    todo.done=!todo.done
                    
                }
            })
        },
        clearCompleted:(state)=>{
            state.todos=state.todos.filter(todo=>todo.done===false)
            localStorage.setItem('todos',JSON.stringify(state.todos.map(todo=>todo)));
        },
        
    }
});



export const { addNewTodo ,deleteTodo ,completeTodo ,clearCompleted } = todosSlice.actions;