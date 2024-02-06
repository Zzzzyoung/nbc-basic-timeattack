import { useContext } from "react";
import { TodoCardItem } from "../../style/TodoStyle";
import { TodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { id, title, content, completed, limit } = todo;
  const { onDeleteTodoItem, onToggleTodoItem } = useContext(TodoContext);

  const formattedLimit = new Date(limit).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <TodoCardItem $completed={completed}>
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <time>{formattedLimit}</time>
        <div>
          <button onClick={() => onDeleteTodoItem(id)}>삭제</button>
          <button onClick={() => onToggleTodoItem(id)}>
            {completed ? "취소" : "완료"}
          </button>
        </div>
      </article>
    </TodoCardItem>
  );
};

export default TodoItem;
