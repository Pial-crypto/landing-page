import { useState } from "react";
import { BarChart3 } from "lucide-react";
import { pills, courses } from "../data";
import { Photo, Avatars, Rating, SectionHead } from "./ui";

function CourseCard({ c }) {
  return (
    <article className="card course">
      <div className="thumb">
        <Photo  hue={c.hue} alt={c.title} />
        <div className="chips"><span>{c.lessons} Lessons</span><span>{c.duration}</span><span>{c.comments} Comments</span></div>
      </div>
      <div className="row"><h3>{c.title}</h3><Rating value={c.rating} /></div>
      <p className="by">by <a href="#creators">{c.author}</a></p>
      <div className="row meta"><span className="level"><BarChart3 size={18} />{c.level}</span><Avatars /></div>
      <p className="price"><b>${c.price}</b>/lifetime</p>
    </article>
  );
}

export default function Courses() {
  const [active, setActive] = useState("Featured");
  return (
    <section className="section container" id="courses">
      <SectionHead title={<>Discover Your Passion,<br />Build Your Skills</>} text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life." />
      <div className="pills" role="tablist" >
        {pills.map((p) => <button key={p} role="tab" aria-selected={p === active} className={p === active ? "on" : ""} onClick={() => setActive(p)}>{p}</button>)}
        <a href="#courses" className="more">+ More</a>
      </div>
      <div className="grid-3">{courses.map((c) => <CourseCard key={c.title} c={c} />)}</div>
    </section>
  );
}
