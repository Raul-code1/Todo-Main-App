import { useThemeSlice } from "../hooks"

export const Header = () => {

  const { darkMode }=useThemeSlice()


  return (
    <header className={`
    ${( darkMode )?'bg-mobile-dark-mode-pattern   md:bg-desk-dark-mode-pattern   ':'bg-mobile-light-mode-pattern   md:bg-desk-light-mode-pattern   '}
    h-[30vh]
    md:h-[35vh]
    bg-no-repeat bg-cover bg-center 
    `}>



    </header>
  )
}
