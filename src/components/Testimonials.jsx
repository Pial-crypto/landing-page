import { testimonials } from "../data";
import { Photo } from "./ui";

export default function Testimonials() {
  return (
    <section className="soft-bg">
      <div className="container">
        <div className="split head-split">
          <h2 className="h2-left">Discover What Our<br />Community Is Saying</h2>
          <p className="body-lg">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="grid-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card quote">
              <Photo hue={t.hue} className="avatar" alt={t.name} />
              <figcaption><b>{t.name}</b><span>{t.role}</span></figcaption>
              <blockquote>“{t.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
