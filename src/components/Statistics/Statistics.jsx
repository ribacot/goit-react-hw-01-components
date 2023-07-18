export function Statistics({ data }) {
  return (
    <ul className="stat-list">
      {data.map(({ id, label, percentage }) => {
        return (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}
