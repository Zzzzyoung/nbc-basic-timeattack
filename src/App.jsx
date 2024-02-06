import Header from "./components/layout/Header";
import TodoController from "./components/todo/TodoController";
import TodoContextProvider from "./context/TodoContext";

const App = () => {
  return (
    <>
      <Header />
      <TodoContextProvider>
        <TodoController />
      </TodoContextProvider>
    </>
  );
};

export default App;
