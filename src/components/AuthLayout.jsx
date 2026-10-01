import { Link } from "react-router-dom";
import { Logo, Photo, Avatars, Rating } from "./ui";

export function Field({ label, error, ...input }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input {...input} aria-invalid={!!error} />
      {error && <em role="alert">{error}</em>}
    </label>
  );
}

function CourseMini({ title, hue, className }) {
  return (
    <article className={`card auth-course ${className}`}>
      <div className="thumb"><Photo hue={hue} alt={title} /><div className="chips"><span>17 Lessons</span><span>2 hours 16 mins</span><span>59 Comments</span></div></div>
      <div className="row"><h3>{title}</h3><Rating /></div>
      <p className="by">by <a href="#top">purepearl studio</a></p>
      <div className="row meta"><span className="level">Beginner</span><Avatars /></div>
      <p className="price"><b>$25</b>/lifetime</p>
    </article>
  );
}

/** Shared shell for Login + Signup: blue grid, intro + course collage on the left, white form card on the right. */
export default function AuthLayout({ heading, text, eyebrow, title, footer, children }) {
  return (
    <div className="auth grid-bg">
      <div className="container auth-grid">
        <section className="auth-left">
          <Logo iconOnly />
          <h2>{heading}</h2>
          <p>{text}</p>
          <div className="auth-stage" aria-hidden="true">
            <CourseMini title="Build Digital Asset" hue={220} className="a-back" />
            <CourseMini title="the Power of Big Data" hue={200} className="a-front" />
            <i className="shape ring-lime" /><i className="shape tri-lime" /><i className="shape squiggle-wh" />
            <div className="float f-happy2"><b>Happy Students</b><small>4.5 (240) ★</small><Avatars count="2K+" n={7} /></div>
          </div>
        </section>
        <section className="auth-card">
          <div>
            <Link to="/" className="eyebrow">{eyebrow}</Link>
            <h1>{title}</h1>
            {children}
          </div>
          <p className="auth-foot">{footer}</p>
        </section>
      </div>
    </div>
  );
}

/** "or" divider + Facebook / Google buttons (UI only — wire to your auth provider). */
export function SocialLogin() {
  return (
    <>
      <div className="or"><span>or</span></div>
      <div className="socials">
        <button type="button" aria-label="Continue with Facebook">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#0b0b1a" aria-hidden="true"><path d="M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 12 2z"/></svg>
        </button>
        <button type="button" aria-label="Continue with Google"><b>G</b></button>
      </div>
    </>
  );
}
