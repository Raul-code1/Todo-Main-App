import { AnimatePresence, Reorder } from "framer-motion";
import { useFilterTodos, useThemeSlice, useTodosSlice } from "../hooks";
import { NoTodosMessage } from "./NoTodosMessage";
import { TodoItem } from "./TodoItem";

export const DisplayTodos = () => {

  
  
  //* todo slice data
  const { todos, onClearCompleted } = useTodosSlice();

  //* Todos filter data
  const { filter } = useFilterTodos();

  //*theme slice data
  const { darkMode } = useThemeSlice();

  return (
    <div className="rounded-[5px] mt-4 divide-y-[1px] divide-[#777a92] overflow-hidden ">
      {todos.length === 0 && <NoTodosMessage />}

      {filter === "Active"
        ? todos.map((todo) => {
            return todo.done === false && <TodoItem key={todo.id} {...todo} />;
          })
        : null}

      {filter === "Completed"
        ? todos.map((todo) => {
            return todo.done === true && <TodoItem key={todo.id} {...todo} />;
          })
        : null}

        <Reorder.Group axis="y" values={ todos } onReorder={ (order)=>order  } >
          {
          filter === "All" &&
            todos.map((todo) => (
              <Reorder.Item key={ todo.id } value={ todo } >
                <TodoItem key={todo.id} {...todo} />
              </Reorder.Item>
            ) )

          }

        </Reorder.Group>

      {/*   ${(darkMode )? 'text-[#d2d3db]':'text-[#3d3f50]'} */}

      <div
        className={`
      ${darkMode ? "bg-[#25273c]  " : "bg-[#fafafa]  "} 
      flex justify-between px-3 py-2 text-[#777a92]
      md:hidden
      `}
      >
        <div>{todos.length} items left</div>

        <div onClick={onClearCompleted}>clear completed</div>
      </div>
    </div>
  );
};
