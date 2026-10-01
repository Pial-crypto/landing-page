import { Search } from "lucide-react";
import { Button, Photo, Avatars } from "./ui";

export default function Hero() {
  return (
    <section className="hero container">
      <i className="shape squiggle-l" /><i className="shape squiggle-w" /><i className="shape tri-w" /><i className="shape cyl-r" /><i className="shape ring-w" /><i className="shape squiggle-r" />
      <h1>Get Access to Hundreds<br />Courses Available</h1>
      <p className="lead">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
      <form className="search" onSubmit={(e) => e.preventDefault()} role="search">
        <label><Search size={22} /><input placeholder="Course, topic, creator" aria-label="Search courses" /></label>
        <Button className="lime">Search</Button>
      </form>
      <div className="hero-stage">
        <div className="arc" />
        <Photo className="hero-person" hue={25} alt="Smiling student with headphones and laptop" />
        <div className="float f-topic"><b>UI/UX Design</b><small>200 Courses • 1000+ Students</small></div>
        <div className="float f-progress"><small>Learning Progress</small><strong>55%</strong><span className="bar"><i style={{ width: "42%" }} /></span></div>
        <div className="float f-happy"><b>Happy Students</b><small>4.5 (240) ★</small><Avatars count="2K+" n={7} /></div>
      </div>
    </section>
  );
}
