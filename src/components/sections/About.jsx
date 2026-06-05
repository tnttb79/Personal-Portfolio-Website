import "./sections.scss";
import { about, socials, resumeUrl } from "../../config/portfolio";

const About = ({ runCommand }) => {
  return (
    <div className="about-grid">
      <div className="about-prose">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="about-actions">
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="primary">
            View resume
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); runCommand("projects"); }}>
            See projects
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); runCommand("contact"); }}>
            Contact me
          </a>
        </div>
      </div>

      <aside className="profile-card">
        <div className="avatar">
          <img src="/about.png" alt="Illustration of Thang Ta" loading="lazy" />
        </div>
        <div className="facts">
          <div className="row"><span className="key">name</span><span className="val">{"Thang Ta"}</span></div>
          <div className="row"><span className="key">role</span><span className="val">Software Developer</span></div>
          <div className="row"><span className="key">location</span><span className="val">{socials.location}</span></div>
          <div className="row"><span className="key">status</span><span className="val" style={{ color: "var(--accent)" }}>maybe open to work</span></div>
          <div className="socials">
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src="/linkedIn.png" alt="" />
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="/github.png" alt="" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default About;
