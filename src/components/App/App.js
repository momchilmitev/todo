import "./App.scss";
import TodoForm from "../TodoForm/TodoForm";
import { useState } from "react";
import TodoList from "../TodoList/TodoList";

import sun from "../../assets/icons/icon-sun.svg";
import moon from "../../assets/icons/icon-moon.svg";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="todo todo--dark">
      <div className="container">
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
    </div>
  );
}

export default App;
