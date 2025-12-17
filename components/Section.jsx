export function Section({ id, className = "", style = {}, children }) {
  return (
    <section id={id} className={`section ${className}`.trim()} style={style}>
      {children}
    </section>
  );
}
