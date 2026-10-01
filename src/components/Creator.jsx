import { CheckCircle2 } from "lucide-react";
import { perks } from "../data";
import { Photo, Avatars } from "./ui";

export default function Creator() {
  return (
    <section className="soft-bg flip" id="creators">
      <div className="container split">
        <div className="collage">
          <div className="float blue-card c1"><small>Total Revenue</small><small>July 1-28</small><strong>$120.29</strong><span className="bar"><i style={{ width: "60%" }} /></span></div>
          <div className="float blue-card c2"><small>Year to Date</small><small>2023</small><strong>$1,200.38</strong><em>+12$</em></div>
          <Photo className="collage-person" hue={15} alt="Creator with tablet" />
          <i className="shape squiggle-c" />
          <div className="float f-happy"><b>Happy Students</b><small>4.5 (240) ★</small><Avatars count="2K+" n={7} /></div>
        </div>
        <div>
          <h2 className="h2-left">Create &amp; Manage<br />Courses Easily.</h2>
          <p className="body-lg"><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="perks">{perks.map((p) => <li key={p}><CheckCircle2 size={26} fill="#0039e6" stroke="#fff" />{p}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
