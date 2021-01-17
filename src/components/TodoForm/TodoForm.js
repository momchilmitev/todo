import "./TodoForm.scss";

const TodoForm = ({ addTodo }) => {
  return (
    <form className="todo__form todo__form--dark" onSubmit={addTodo}>
      <input
        className="todo__input"
        type="text"
        placeholder="Create a new todo…"
      />
    </form>
  );
};

export default TodoForm;
