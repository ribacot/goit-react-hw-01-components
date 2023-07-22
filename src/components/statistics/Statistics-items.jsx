import css from './Statistics-items.module.css'

export default function StatisticsItems({ data }) {
  return <ul className={css.list}>{ data.map(({ id, label, percentage }) => {
    return (
      <li key={id} className={css.item}>
        <span className="label">{label}: </span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
  })}</ul>
}
