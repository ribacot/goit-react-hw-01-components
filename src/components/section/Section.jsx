import PropTypes from 'prop-types';
import css from './Section.module.css';

export default function Section({ title, children, sectionClass }) {
  return (
    <section className={sectionClass && css[sectionClass]}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children:PropTypes.node,
  sectionClass:PropTypes.string,
};
