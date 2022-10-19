import { useFilterTodos, useThemeSlice, useTodosSlice } from "../hooks"

export const FilterSection = () => {

  //* todos slice data
  const{ todos,onClearCompleted }=useTodosSlice();

  //* Hanlde filter todos data
  const { handleFilter }=useFilterTodos();


  //*Theme slice data
  const { darkMode }=useThemeSlice();

  return (
    <div className={`
    flex 
    ${( darkMode )? 'bg-[#25273c]  ':'bg-[#fafafa]  '}      
    mt-4 px-4 py-2 rounded-[5px]`}   >

    <span className="hidden md:block cursor-pointer text-[#777a92]   ">{todos.length} items left </span>

    <div className="flex gap-2 mx-auto">
      <span
       className={`text-[#3a7bfd] cursor-pointer `} 
       onClick={()=>handleFilter('All')}
       >
        All
        </span>
      <span
       className={`text-[#777a92] cursor-pointer ${( darkMode )?'hover:text-[white]':'hover:text-[black]'}   ` } 
       onClick={()=>handleFilter('Active')}
       >
        Active
        </span>
      <span
       className={`text-[#777a92] cursor-pointer ${( darkMode )?'hover:text-[white]':'hover:text-[black]'}  `}
       onClick={()=>handleFilter('Completed')}
       >
        Completed
        </span>
    </div>

    <span onClick={onClearCompleted} className={`
    ${( darkMode )?'hover:text-[white]':'hover:text-[black]'}
    hidden md:block cursor-pointer text-[#777a92] `}>Clear completed</span>

    </div>
  )
}
