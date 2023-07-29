import "./App.scss";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <main className="container">
      <h1 className="header">Todo App</h1>

      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;
