import { useThemeSlice } from "../hooks"



export const NoTodosMessage = () => {

  //* theme slice data
  const{ darkMode }=useThemeSlice();

  return (
    <div className={`
    ${( darkMode )? 'bg-[#25273c]  ':'bg-[#fafafa]  '} 
    px-3 py-4 text-center md:py-10`}>


      <p className={`
        ${(darkMode )? 'text-[white]':'text-[#3d3f50]'}
      font-[700]`}>No items found</p>

      <div className="mx-auto text-center text-[30px]">⚠️</div>

      <p className="text-[#777a92]">you haven't added any tasks yet</p>

    </div>
  )
}
