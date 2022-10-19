import { useDispatch, useSelector } from "react-redux"
import { addNewTodo, clearCompleted, completeTodo, deleteTodo } from "../store/todos/todosSlice";


export const useTodosSlice = () => {
  
    const dispatch=useDispatch();
    const {todos}=useSelector((state)=>state.todos)


    const onAddNewTodo=(todo)=>{
        dispatch( addNewTodo(todo) );
    }

    
    const onDeleteTodo=(id)=>{
        dispatch( deleteTodo(id) );
    }


    const toggleComplete=(id)=>{
        dispatch( completeTodo(id) );
    }


    const onClearCompleted=()=>{
        dispatch( clearCompleted() )
    }

    
    



    return{
        //* states
        todos,
        
        dispatch,

        //*Methods
        onAddNewTodo,
        onDeleteTodo,
        toggleComplete,
        onClearCompleted,
        
        

    }

}
