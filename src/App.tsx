import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todo-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo></NewTodo>
      <Todos></Todos>
    </TodosContextProvider>
  );
}

export default App;
