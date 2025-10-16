import { memo } from "react";
import { todoData } from "../static/data.js";
import Todo from "./Todo";

// const getTodos = async () => {
//   let todos = await fetch("");

//   return todos.json();
// };

const TodoList = () => {
  //   const { todos } = getTodos();

  return (
    <ul>
      {todoData?.map((todo) => {
        return (
          <li key={todo?.id}>
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default memo(TodoList);
