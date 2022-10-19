import { FilterSection,DisplayTodos,InputAddTodo,HeroAndTheme } from "./"
import { motion } from "framer-motion";
import { useThemeSlice } from "../hooks";


export const TodosSection = () => {

  const { darkMode }=useThemeSlice()

  return (
    <motion.div 
    initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        duration:1,
        ease:"easeInOut"
      }}
    className="
    -translate-y-36
      w-[90%] 
      mx-auto
      max-w-[600px]

     ">
      <HeroAndTheme />  

      <InputAddTodo />

      <DisplayTodos />

      <FilterSection />
      
      <footer className={`
      ${ (darkMode)  ? 'text-[white] ':'text-[black]' }
      text-[12px] text-center mt-14`} >
          Challenge by <a className="text-[blue]" href="https://www.frontendmentor.io/">Frontend Mentor</a>. Coded by  
          <a className="text-[blue]" href="https://github.com/Raul-code1"> Raul Pineda</a>.
      </footer>

    </motion.div>
  )
}
