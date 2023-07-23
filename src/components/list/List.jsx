import PropTypes from 'prop-types';
import css from './List.module.css';

export default function List({ children }) {
  return <ul className={css.list}>{children}</ul>;
}

List.propTypes = {
  children: PropTypes.node,
};
