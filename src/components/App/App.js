import "./App.scss";
import TodoForm from "../TodoForm/TodoForm";
import { useState } from "react";
import TodoList from "../TodoList/TodoList";

import sun from "../../assets/icons/icon-sun.svg";
import moon from "../../assets/icons/icon-moon.svg";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      text: e.target[0].value,
      completed: false,
    };
    e.target[0].value = "";
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filterTodos = (filter) => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => todo.completed === false);
      case "completed":
        return todos.filter((todo) => todo.completed === true);
      default:
        return todos;
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };

  let className = darkTheme ? "todo todo--dark" : "todo";

  return (
    <div className={className}>
      <div className="container">
        <header className="todo__header">
          <h1 className="todo__title">TODO</h1>
          <img
            className="todo__theme-switcher"
            src={darkTheme ? moon : sun}
            alt="theme-switcher icon"
            onClick={toggleDarkTheme}
          />
        </header>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={filterTodos(filter)}
          setFilter={setFilter}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          filter={filter}
          deleteCompleted={deleteCompleted}
          setTodos={setTodos}
        />
        <footer className="todo__footer">Drag and drop to reorder list</footer>
      </div>
    </div>
  );
}

export default App;
