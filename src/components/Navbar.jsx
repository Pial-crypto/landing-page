import { ShoppingBag } from "lucide-react";
import { Logo } from "./ui";

export default function Navbar() {
  return (
    <nav className="nav container" id="top">
      <Logo />
      <ul className="nav-links">
        <li><a className="active" href="#top">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#creators">Creators</a></li>
      </ul>
      <div className="nav-actions">
        <a href="#signin">Sign In</a><a href="#join">Join Us</a>
        <button aria-label="Cart" className="icon-btn"><ShoppingBag size={22} /></button>
      </div>
    </nav>
  );
}
