export default function TransactionTable({ classTable, children }) {
  return (
    <table className={classTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
