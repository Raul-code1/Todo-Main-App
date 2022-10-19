import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../store/theme/themeSlice"

export const useThemeSlice = () => {


    const dispatch=useDispatch();
    const { darkMode }=useSelector( (state)=>state.theme)



    const handleToggleTheme=()=>{
        dispatch( toggleTheme() )
    }


    return{
        //*State
        darkMode,

        //*Method
        handleToggleTheme
    }

}
