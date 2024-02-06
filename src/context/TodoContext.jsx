import { createContext, useEffect, useState } from "react";
import { defaultTodos } from "../static/todos";

export const TodoContext = createContext();

// SECTION: 4번 문제
// TODO: TodoProvider 컴포넌트 작성
// NOTE: `TodoContext.Provider` 컴포넌트로 `props.children`을 감싸서 반환
// HINT: `props`로 `value`를 전달
function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState(defaultTodos);
  const [sortOrder, setSortOrder] = useState("asc");

  const onSubmitTodo = (nextTodo) => {
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
  };

  const onDeleteTodoItem = (id) => {
    // SECTION: 2-1번 문제
    // TODO: 투두 리스트 삭제
    // NOTE: filter 메서드를 사용하여 삭제할 아이템을 제외한 나머지 아이템만 반환 후 setTodos로 업데이트
    // HINT: `id`와 `todo.id`가 일치하지 않는 아이템만 반환
    const remainTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainTodos);
  };

  const onToggleTodoItem = (id) => {
    // SECTION: 2-2번 문제
    // TODO: 투두 리스트 completed(완료) 상태를 토글
    // NOTE: map 메서드를 사용하여 특정 아이템의 completed 상태를 토글 후 setTodos로 업데이트
    // HINT: `id`와 `todo.id`가 일치하는 아이템의 completed 상태를 토글
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateTodos);
  };

  const onChangeSortOrder = (e) => {
    const nextSortOrder = e.target.value;
    setSortOrder(nextSortOrder);
  };

  useEffect(() => {
    if (sortOrder === "asc") {
      // SECTION: 3-1번 문제
      // TODO: 투두 리스트 오름차순 정렬
      // NOTE: sort 메서드를 사용하여 `limit`을 기준으로 오름차순 정렬 후 setTodos로 업데이트
      // HINT: `new Date(todo.limit)`을 사용하여 정렬
      const sortedTodos = [...todos].sort(
        (a, b) => new Date(a.limit) - new Date(b.limit)
      );
      setTodos(sortedTodos);
      return;
    }

    // SECTION: 3-2번 문제
    // TODO: 투두 리스트 내림차순 정렬
    // NOTE: sort 메서드를 사용하여 `limit`을 기준으로 내림차순 정렬 후 setTodos로 업데이트
    // HINT: `new Date(todo.limit)`을 사용하여 정렬
    const sortedTodos = [...todos].sort(
      (a, b) => new Date(b.limit) - new Date(a.limit)
    );
    setTodos(sortedTodos);
  }, [sortOrder]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        onSubmitTodo,
        onDeleteTodoItem,
        onToggleTodoItem,
        sortOrder,
        setSortOrder,
        onChangeSortOrder,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
