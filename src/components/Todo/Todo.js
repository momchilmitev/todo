import "./Todo.scss";

const Todo = () => {
  return (
    <li className="todo__item">
      <span className="check-btn"></span>
      Todo
      <span className="delete-btn"></span>
    </li>
  );
};

export default Todo;
