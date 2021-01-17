import "./Filters.scss";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <span
        onClick={() => setFilter("all")}
        className={filter === "all" ? "filter active" : "filter"}
      >
        All
      </span>
      <span
        onClick={() => setFilter("active")}
        className={filter === "active" ? "filter active" : "filter"}
      >
        Active
      </span>
      <span
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "filter active" : "filter"}
      >
        Completed
      </span>
    </div>
  );
};

export default Filters;
