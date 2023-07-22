import css from './TransactoinTableItems.module.css';

export default function TransactoinTableItems({ items }) {
  return items.map(({ id, type, amount, currency }, index) => {
    return (
      <tr key={id} className={!((1 + index) % 2) && css.grey}>
        <td>{type}</td>
        <td>{amount}</td>
        <td className={css.last}>{currency}</td>
      </tr>
    );
  });
}
