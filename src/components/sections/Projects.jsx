import { useState } from "react";
import "./projects.scss";
import { projects } from "../../config/portfolio";

const PREVIEW_COUNT = 2;

const ProjectCard = ({ p }) => (
  <article className="project-card">
    <div className="card-bar">
      <span className="open">$ open</span>
      <span className="slug">./{p.slug}</span>
    </div>
    <div className="thumb">
      <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" />
    </div>
    <div className="card-body">
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="tags">
        {p.technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="links">
        {p.demo ? (
          <a className="primary" href={p.demo} target="_blank" rel="noreferrer">
            ▸ Live Demo
          </a>
        ) : (
          <button className="disabled" type="button" disabled>
            demo: coming soon
          </button>
        )}
        <a href={p.github} target="_blank" rel="noreferrer">
          <img src="/github.png" alt="" />
          GitHub
        </a>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = projects.length > PREVIEW_COUNT;
  const visible = expanded ? projects : projects.slice(0, PREVIEW_COUNT);
  const remaining = projects.length - PREVIEW_COUNT;

  return (
    <div className="projects">
      <div className="ls-listing" aria-hidden="true">
        <div className="ls-row">
          <span className="perm">total {projects.length}</span>
        </div>
        {projects.map((p) => (
          <div className="ls-row" key={p.id}>
            <span className="perm">drwxr-xr-x</span>{" "}
            <span className="perm">thang staff</span>{" "}
            <span className="size">4.0K</span>
            <span className="name">{p.slug}/</span>
          </div>
        ))}
      </div>

      <div className="project-grid" id="project-grid">
        {visible.map((p) => (
          <ProjectCard p={p} key={p.id} />
        ))}
      </div>

      {hasMore && (
        <div className="projects-more">
          <button
            type="button"
            className={`show-more ${expanded ? "is-open" : ""}`}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="project-grid"
          >
            <span className="label">
              {expanded ? "$ collapse" : `$ ls --all`}
              <span className="hint">
                {expanded ? "show less" : `${remaining} more project${remaining > 1 ? "s" : ""}`}
              </span>
            </span>
            <span className="chev" aria-hidden="true">▾</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
