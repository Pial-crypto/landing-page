import { Button } from "./ui";

export default function CtaBanner() {
  return (
    <section className="cta grid-bg" id="join">
      <i className="shape squiggle-l" /><i className="shape squiggle-w" /><i className="shape tri-l" /><i className="shape cyl-w" /><i className="shape ring-l" />
      <div className="container cta-body">
        <h2>Unlock Your Potential as a<br />Creator with ByteSpace</h2>
        <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <Button className="lime">Join as Creator</Button>
      </div>
    </section>
  );
}
