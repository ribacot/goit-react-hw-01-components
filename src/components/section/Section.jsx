

export default function Section({ title, children }) {
  return (
    <section className="">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}