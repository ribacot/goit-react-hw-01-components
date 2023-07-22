import css from './Statistics-items.module.css';
import randomColor from '../functions/randomColor';

export default function StatisticsItems({ data }) {
  return (
    <ul className={css.list}>
      {data.map(({ id, label, percentage }) => {
        const color = randomColor();
        return (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: `${color}` }}
          >
            <span className="label">{label}: </span>
            <span className="percentage">{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}
