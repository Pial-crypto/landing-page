export default function Logos() {
  return (
    <section className="logos">
      <div className="container logos-row">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="partner"><span className="dot" />Logoipsum</div>
        ))}
      </div>
    </section>
  );
}
