import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../store/filter/filterSlice";

export const useFilterTodos = () => {

    const dispatch=useDispatch();

    const { filter }=useSelector((state)=>state.filter)




    




    const handleFilter=( option )=>{
        dispatch( changeFilter(option) )
    }




    return{

        filter,
        handleFilter,

    }

}
