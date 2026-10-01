import { footerCols } from "../data";
import { Logo, Button } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Logo dark />
          <p className="body-md">Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <form className="search news" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <Button className="lime">Search</Button>
          </form>
          <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
        </div>
        <div className="fcols">{footerCols.map((col, i) => <ul key={i}>{col.map((l) => <li key={l}><a href="#top">{l}</a></li>)}</ul>)}</div>
      </div>
      <div className="container footer-bottom">
        <span>@ 2023 ByteSpace. All rights reserved.</span>
        <span><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a><a href="#top">Cookies Settings</a></span>
      </div>
    </footer>
  );
}
