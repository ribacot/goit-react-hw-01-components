

export function Section({ titel,children }) {
    return(
      <section>
            {titel && <h2>{titel}</h2>}
            {children}
    </section>)
}