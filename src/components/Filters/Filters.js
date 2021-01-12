import "./Filters.scss";

const Filters = () => {
  return (
    <div className="filters">
      <span className="filter filter--all active">All</span>
      <span className="filter filter--active">Active</span>
      <span className="filter filter--completed">Completed</span>
    </div>
  );
};

export default Filters;
