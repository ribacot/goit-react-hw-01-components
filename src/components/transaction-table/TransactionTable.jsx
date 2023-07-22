export default function TransactionTable({  children }) {
  return (
    <table className="">
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
