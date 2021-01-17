import "./Filters.scss";

const Filters = ({ filterTodos }) => {
  return (
    <div className="filters">
      <span
        onClick={() => filterTodos("")}
        className="filter filter--all active"
      >
        All
      </span>
      <span
        onClick={() => filterTodos("active")}
        className="filter filter--active"
      >
        Active
      </span>
      <span
        onClick={() => filterTodos("completed")}
        className="filter filter--completed"
      >
        Completed
      </span>
    </div>
  );
};

export default Filters;
