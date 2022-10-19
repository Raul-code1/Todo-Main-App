import { useState } from "react";

import { BsCircle } from "react-icons/bs";
import { useThemeSlice, useTodosSlice } from "../hooks";



export const InputAddTodo = () => {

  //* Theme slice data
  const { darkMode }=useThemeSlice();


  //* Todos  slice data
  const { onAddNewTodo }=useTodosSlice();

  //* handle form

  const [inputValue, setInputValue] = useState('')

  const handleChange=({target})=>setInputValue(target.value)
  

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!inputValue)return;

    const newTodo={
      id:new Date().getTime(),
      description:inputValue,
      done:false
    }

    onAddNewTodo(newTodo);

    setInputValue('')

  }


  return (
    <div className={`flex  items-center rounded-[5px] px-3 py-1 mt-4
    ${( darkMode )? 'bg-[#25273c]  ':'bg-[#fafafa]  '}
    `}>


    <form onSubmit={handleSubmit} className=" flex items-center w-[100%]">
      <BsCircle className="text-[#777a92]" />
      <input 
      className={`border-none 
      outline-none
      w-[90%]
      ${( darkMode )? 'bg-[#25273c]  ':'bg-[#fafafa]  '}
      ${( darkMode )? 'text-[#d2d3db] ':'bg-[#25273c]  '}
     pl-2
  `}

      name="description"
      value={inputValue} 
      onChange={handleChange}
      placeholder="Create a new todo"
      type="text" />
    </form>
    </div>
  )
}
