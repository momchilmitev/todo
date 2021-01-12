import "./TodoList.scss";
import Todo from "../Todo/Todo";
import Filters from "../Filters/Filters";

const TodoList = () => {
  return (
    <main className="todo__main">
      <ul className="todo__list">
        <Todo check={true} />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ul>
      <div className="todo__actions">
        <span className="todo__count">5 items left</span>
        <Filters />
        <span className="todo__clear--completed">Clear Completed</span>
      </div>
    </main>
  );
};

export default TodoList;
