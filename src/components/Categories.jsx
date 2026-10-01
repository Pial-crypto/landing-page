import { PenTool, Code2, Laptop, Building2, Megaphone, Camera } from "lucide-react";
import { categories } from "../data";
import { SectionHead } from "./ui";

const icons = [PenTool, Code2, Laptop, Building2, Megaphone, Camera];

export default function Categories() {
  return (
    <section className="section container">
      <SectionHead title="Explore Diverse Learning Paths at Bytespace" text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories." />
      <div className="cats">
        {categories.map((c, i) => { const I = icons[i]; return (
          <a href="#courses" key={c} className="card cat"><span className="lime-dot"><I size={30} /></span>{c}</a>
        ); })}
      </div>
    </section>
  );
}
