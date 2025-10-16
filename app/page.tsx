import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <>
      <h1>Awesome Todo App</h1>
      <AddTodo />
      <TodoList />
    </>
  );
}
