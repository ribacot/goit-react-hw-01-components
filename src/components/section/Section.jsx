

export function Section({ titel,classN,children }) {
    return(
      <section className={classN}>
            {titel && <h2>{titel}</h2>}
            {children}
    </section>)
}