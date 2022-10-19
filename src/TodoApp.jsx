import { useEffect } from "react";
import { Header, TodosSection } from "./components"
import { useThemeSlice } from "./hooks"

export const TodoApp = () => {

  const { darkMode }=useThemeSlice();

  useEffect(() => {
    localStorage.setItem('theme',JSON.stringify(darkMode));
  }, [darkMode])
  
  

  return (
    <main className={`
    ${( darkMode )? 'bg-Very-Dark-Blue' :' bg-[#e4e5f1] '}
    font-[ 'Josefin Sans', sans-serif;]
    text-[18px]
    h-[100vh]
    transition-all
    ` }> 
      <Header />
      
      <TodosSection />

    </main>
  )
}


