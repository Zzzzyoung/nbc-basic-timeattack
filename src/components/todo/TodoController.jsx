import { useContext } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoContext } from "../../context/TodoContext";

const TodoController = () => {
  const { todos, sortOrder, onChangeSortOrder } = useContext(TodoContext);

  const workingTodos = todos.filter((todo) => !todo.completed);
  const doneTodos = todos.filter((todo) => todo.completed);

  return (
    <main>
      <TodoForm />
      <div>
        <select onChange={onChangeSortOrder} value={sortOrder}>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </div>
      <TodoList headTitle="Working!" todos={workingTodos} />
      <TodoList headTitle="Done!" todos={doneTodos} />
    </main>
  );
};

export default TodoController;
