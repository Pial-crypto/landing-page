import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
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
        <Link to="/login">Sign In</Link><Link to="/signup">Join Us</Link>
        <button aria-label="Cart" className="icon-btn"><ShoppingBag size={22} /></button>
      </div>
    </nav>
  );
}
