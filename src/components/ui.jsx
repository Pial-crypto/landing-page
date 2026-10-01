import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = ({ dark, iconOnly }) => (
  <Link to="/" className={`logo ${dark ? "logo-dark" : ""}`}>
    <svg width="38" height="38" viewBox="0 0 38 38" aria-hidden="true"><path d="M4 2h9v10c3-3 6-4 10-4 8 0 13 5 13 12s-5 12-13 12c-8 0-19-3-19-14z" fill="#d4fb1e"/><path d="M15 15l9 5-9 5z" fill={dark ? "#fff" : "#0039e6"}/></svg>
    {!iconOnly && <span>ByteSpace</span>}
  </Link>
);
export const Button = ({ children, className = "", ...p }) => <button className={`btn ${className}`} {...p}>{children}</button>;

/** Photo placeholder — drop real exports in src/assets and pass src. */
export const Photo = ({ src, hue = 220, className = "", alt = "" }) =>
  src ? <img src={src} alt={alt} className={className} /> : <div className={`ph ${className}`} style={{ "--h": hue }} role="img" aria-label={alt} />;

export const Avatars = ({ count = "26+", n = 4 }) => (
  <div className="avatars">
    {Array.from({ length: n }, (_, i) => <span key={i} style={{ "--h": 20 + i * 70 }} />)}
    <b>{count}</b>
  </div>
);
export const Rating = ({ value = 4.5 }) => <span className="rating">{value} <Star size={20} fill="#c9c9cf" stroke="none" /></span>;
export const SectionHead = ({ title, text }) => (
  <div className="section-head"><h2>{title}</h2><p>{text}</p></div>
);
