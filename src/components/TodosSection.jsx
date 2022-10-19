import { FilterSection,DisplayTodos,InputAddTodo,HeroAndTheme } from "./"
import { motion } from "framer-motion";


export const TodosSection = () => {
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

    </motion.div>
  )
}
