import css from './TransactionTable.module.css';

export default function TransactionTable({ children }) {
  return (
    <table cellspacing="0" className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th className={css.last}>Currency</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
