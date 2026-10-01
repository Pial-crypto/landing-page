import { stats } from "../data";
import { Photo } from "./ui";

export default function Growth() {
  return (
    <section className="soft-bg">
      <div className="container split">
        <div>
          <h2 className="h2-left">Your Path to Professional<br />Growth Starts Here!</h2>
          <p className="body-lg">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
          <dl className="stats">{stats.map(([n, l]) => <div key={l}><dt>{n}</dt><dd>{l}</dd></div>)}</dl>
        </div>
        <div className="collage">
          <div className="card mini"><Photo hue={30} alt="Learn Figma" /><h3>Learn Figma from Basic</h3><p className="by">by <a href="#creators">purepearl studio</a></p><p className="price"><b>$25</b>/lifetime</p></div>
          <Photo className="collage-person" hue={25} alt="Student with laptop" />
          <div className="float f-progress"><small>Learning Progress</small><strong>55%</strong><span className="bar"><i style={{ width: "42%" }} /></span></div>
          <i className="shape squiggle-c" />
        </div>
      </div>
    </section>
  );
}
