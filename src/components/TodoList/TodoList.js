import "./TodoList.scss";
import { useState } from "react";
import Todo from "../Todo/Todo";
import Filters from "../Filters/Filters";

const TodoList = ({
  todos,
  setFilter,
  toggleTodo,
  deleteTodo,
  filter,
  deleteCompleted,
  setTodos,
}) => {
  const [draggedTodo, setDraggedTodo] = useState(null);

  const drag = (e, index) => {
    setDraggedTodo(todos[index]);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.id);
  };

  const over = (e, index) => {
    const draggedOverTodo = todos[index];

    // if the item is dragged over itself, ignore
    if (draggedTodo === draggedOverTodo) {
      return;
    }

    // filter out the currently dragged item
    let newTodos = todos.filter((todo) => todo.id !== draggedTodo.id);

    // add the dragged item after the dragged over item
    newTodos.splice(index, 0, draggedTodo);

    setTodos(newTodos);
  };

  const end = () => {
    setDraggedTodo(null);
  };

  const renderTodos = () => {
    if (todos.length === 0) {
      return <div className="empty">No todos</div>;
    } else {
      return todos.map((todo, index) => (
        <Todo
          id={todo.id}
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          drag={drag}
          over={over}
          end={end}
          index={index}
        />
      ));
    }
  };

  return (
    <main className="todo__main">
      <ul id="list" className="todo__list">
        {renderTodos()}
      </ul>
      <div className="todo__actions">
        <span className="todo__count">{todos.length} items left</span>
        <Filters filter={filter} setFilter={setFilter} />
        <span className="todo__clear--completed" onClick={deleteCompleted}>
          Clear Completed
        </span>
      </div>
    </main>
  );
};

export default TodoList;
