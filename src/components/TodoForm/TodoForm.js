import "./TodoForm.scss";

const TodoForm = () => {
  return (
    <form className="todo__form">
      <input
        className="todo__input"
        type="text"
        placeholder="Create a new todo…"
      />
    </form>
  );
};

export default TodoForm;
