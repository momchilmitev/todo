import "./Todo.scss";

const Todo = ({ check }) => {
  return (
    <li className={check ? "todo__item todo__item--checked" : "todo__item"}>
      <span
        className={check ? "check-btn check-btn--checked" : "check-btn"}
      ></span>
      Todo
      <span className="delete-btn"></span>
    </li>
  );
};

export default Todo;
