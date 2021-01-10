import "./App.scss";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

import sun from "../../assets/icons/icon-sun.svg";

function App() {
  return (
    <div className="todo">
      <header className="todo__header">
        <h1 className="todo__title">TODO</h1>
        <img
          className="todo__theme-switcher"
          src={sun}
          alt="theme-switcher icon"
        />
      </header>
      <TodoForm />
      <TodoList />
      <footer className="todo__footer">Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
