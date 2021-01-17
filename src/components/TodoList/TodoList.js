import "./TodoList.scss";
import Todo from "../Todo/Todo";
import Filters from "../Filters/Filters";

const TodoList = ({ todos, setFilter, toggleTodo, deleteTodo, filter }) => {
  const renderTodos = () => {
    if (todos.length === 0) {
      return <div className="empty">No todos</div>;
    } else {
      return todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ));
    }
  };

  return (
    <main className="todo__main">
      <ul className="todo__list">{renderTodos()}</ul>
      <div className="todo__actions">
        <span className="todo__count">5 items left</span>
        <Filters filter={filter} setFilter={setFilter} />
        <span className="todo__clear--completed">Clear Completed</span>
      </div>
    </main>
  );
};

export default TodoList;
