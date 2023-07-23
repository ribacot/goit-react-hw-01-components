import PropTypes from 'prop-types';
import css from './TransactoinTableItems.module.css';

export default function TransactoinTableItems({ items }) {
  return items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id} className={css.histori_tr}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
}

TransactoinTableItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string)
  ).isRequired,
};
