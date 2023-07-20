

export default function Section({ title, sectionClass, children }) {
  return (
    <section className={sectionClass}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}