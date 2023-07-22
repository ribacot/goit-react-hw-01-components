import css from './Section.module.css';

export default function Section({ title, children, sectionClass }) {
  return (
    <section className={sectionClass && css[sectionClass]}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
