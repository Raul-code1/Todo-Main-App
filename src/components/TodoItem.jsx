import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { useThemeSlice, useTodosSlice } from "../hooks";
import { motion } from "framer-motion";

const variants={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      duration:0.8
    }
  }
}

export const TodoItem = ({ id,description,done }) => {

  //* Todos slice data
  const{ onDeleteTodo,toggleComplete }=useTodosSlice();


  //* Theme slice data
  const { darkMode }=useThemeSlice();



  return (
    <motion.div 
    initial='hidden'
    animate='visible'
    exit='hidden'
    variants={variants}
    layoutId={id}
    className={`
      ${( darkMode )? 'bg-[#25273c]  ':'bg-[#fafafa]  '}      
      px-3
      py-1
      rounder-[5px]
      flex
      items-center
      place-content-around
        `}>

      <span className={`
       ${(darkMode )? 'text-[#d2d3db] ':'text-[#3a7bfd] '}

      text-[#777a92] cursor-pointer`} onClick={()=>toggleComplete(id)}> 
      {done ?<AiFillCheckCircle /> : <BsCircle />}
      </span>  

      <div className= {`  ${(done)&& 'line-through '} w-[90%] overflow-hidden `} >
          <span className={`pl-1 text-[14px] 
            ${(darkMode )? 'text-[#d2d3db] ':'text-[#3d3f50] '}
            ${( done )?'decoration-[#d2d3db] text-[#d2d3db]  ':''}
          `}>{description}</span>
      </div>

      <motion.span
      whileHover={{scale:1.5}}
       className="cursor-pointer text-[#777a92]" onClick={ ()=>onDeleteTodo(id) }>
        X
        </motion.span>

    </motion.div>
  )
}
