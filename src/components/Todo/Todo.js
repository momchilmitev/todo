import "./Todo.scss";

const Todo = ({ todo, toggleTodo }) => {
  return (
    <li
      className={
        todo.completed ? "todo__item todo__item--checked" : "todo__item"
      }
    >
      <span
        className={
          todo.completed ? "check-btn check-btn--checked" : "check-btn"
        }
        onClick={() => toggleTodo(todo.id)}
      ></span>
      {todo.text}
      <span className="delete-btn"></span>
    </li>
  );
};

export default Todo;
