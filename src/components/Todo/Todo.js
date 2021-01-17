import "./Todo.scss";

const Todo = ({ todo, toggleTodo, deleteTodo, drag, over, end, index }) => {
  return (
    <li
      id={todo.id}
      draggable
      className={
        todo.completed ? "todo__item todo__item--checked" : "todo__item"
      }
      onDragStart={(e) => drag(e, index)}
      onDragOver={(e) => over(e, index)}
      onDragEnd={end}
    >
      <span
        className={
          todo.completed ? "check-btn check-btn--checked" : "check-btn"
        }
        onClick={() => toggleTodo(todo.id)}
      ></span>
      {todo.text}
      <span className="delete-btn" onClick={() => deleteTodo(todo.id)}></span>
    </li>
  );
};

export default Todo;
