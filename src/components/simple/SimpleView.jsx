import { useState } from "react";
import "./simple.scss";
import {
  profile,
  socials,
  about,
  skills,
  projects,
  resumeUrl,
} from "../../config/portfolio";

const PROJECT_PREVIEW = 2;

/*
 * The "no-frills" recruiter view: a calm, light, single-column document.
 * Same content as the terminal site, optimized for fast human scanning.
 */
const SimpleView = ({ onExit }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, PROJECT_PREVIEW);
  const remaining = projects.length - PROJECT_PREVIEW;

  return (
    <div className="simple">
      <div className="simple-topbar">
        <span className="simple-topbar__note">Boring mode</span>
        <button type="button" className="simple-topbar__back" onClick={onExit}>
          ← Back to the script kiddie version
        </button>
      </div>

      <div className="simple-inner">
        <header className="simple-head">
          <p className="simple-eyebrow">{socials.location} · {profile.role}</p>
          <h1 className="simple-name">{profile.name}</h1>
          <p className="simple-lead">{profile.blurb}</p>

          <span className="simple-status">
            <span className="dot" aria-hidden="true" />
            maybe open to work
          </span>

          <nav className="simple-contacts" aria-label="Contact and links">
            <a href={`mailto:${socials.email}`}>Email</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="is-cta">
              Resume ↗
            </a>
          </nav>
        </header>

        <section className="simple-section" aria-labelledby="s-about">
          <p className="simple-label" id="s-about"><span>01</span> Profile</p>
          <div className="simple-prose">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="simple-section" aria-labelledby="s-skills">
          <p className="simple-label" id="s-skills"><span>02</span> Skills</p>
          <div className="simple-skills">
            {skills.map((group) => (
              <div className="skill-block" key={group.group}>
                <h3>{group.group}</h3>
                <p>{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="simple-section" aria-labelledby="s-proj">
          <p className="simple-label" id="s-proj"><span>03</span> Hobby projects</p>
          <ul className="simple-projects">
            {visibleProjects.map((p) => (
              <li key={p.id}>
                <div className="proj-head">
                  <h3>{p.title}</h3>
                  <div className="proj-links">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">Live ↗</a>
                    )}
                    <a href={p.github} target="_blank" rel="noreferrer">Code ↗</a>
                  </div>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <p className="proj-tech">{p.technologies.join(" · ")}</p>
              </li>
            ))}
          </ul>
          {remaining > 0 && (
            <button
              type="button"
              className="simple-more"
              onClick={() => setShowAllProjects((v) => !v)}
              aria-expanded={showAllProjects}
            >
              {showAllProjects
                ? "Show less"
                : `Show ${remaining} more project${remaining > 1 ? "s" : ""}`}
              <span className="chev" aria-hidden="true">{showAllProjects ? "↑" : "↓"}</span>
            </button>
          )}
        </section>

        <section className="simple-section" aria-labelledby="s-contact">
          <p className="simple-label" id="s-contact"><span>04</span> Get in touch</p>
          <div className="simple-contact-block">
            <p>
              The fastest way to reach me is email. I usually reply within a day.
            </p>
            <div className="contact-rows">
              <div className="c-row">
                <span className="c-key">Email</span>
                <a href={`mailto:${socials.email}`}>{socials.email}</a>
              </div>
              <div className="c-row">
                <span className="c-key">Phone</span>
                <a href={`tel:${socials.phone.replace(/\s/g, "")}`}>{socials.phone}</a>
              </div>
              <div className="c-row">
                <span className="c-key">Location</span>
                <span>{socials.location}</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="simple-foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <button type="button" className="simple-foot__back" onClick={onExit}>
            Prefer the terminal? Switch back →
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SimpleView;
