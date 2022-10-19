import { BsSun} from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useThemeSlice } from "../hooks";

import { motion } from "framer-motion";


export const HeroAndTheme = () => {

  const { darkMode,handleToggleTheme }=useThemeSlice();


  return (
    <motion.div 
    initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        duration:2,
        ease:"easeInOut"
      }}
    className="flex justify-between items-center text-[#fff]" >

      <h1
      
      className="
      text-[30px]
      md:text-[40px]
      font-[700]
      ">TODOS</h1>

    
      <motion.div
      transition={{duration:2}}
      whileHover={{
        rotate:360,
        scale:1
        
    }}

      onClick={ handleToggleTheme } className="cursor-pointer text-[20px]" >
          { darkMode ?  <BsSun /> : <FaMoon />}
      </motion.div>

    </motion.div>
  )
}
