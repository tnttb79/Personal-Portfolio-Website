import { useEffect, useState } from "react";
import "./hero.scss";
import TerminalWindow from "../terminal/TerminalWindow";
import TerminalPrompt from "../terminal/TerminalPrompt";
import TerminalInput from "../terminal/TerminalInput";
import { profile, resumeUrl } from "../../config/portfolio";

const BOOT = [
  { text: "Initializing portfolio...", ok: false },
  { text: "Loading profile", ok: true },
  { text: "Loading projects", ok: true },
  { text: "Loading resume", ok: true },
  { text: "Status: online", status: true },
];

const HERO_COMMANDS = [
  ["about", "view background"],
  ["skills", "view technical stack"],
  ["projects", "view selected work"],
  ["resume", "view resume"],
  ["contact", "get in touch"],
];

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Hero = ({ runCommand, commandNames }) => {
  const [visible, setVisible] = useState(prefersReduced() ? BOOT.length : 0);

  useEffect(() => {
    if (prefersReduced()) return;
    if (visible >= BOOT.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 380);
    return () => clearTimeout(t);
  }, [visible]);

  const booted = visible >= BOOT.length;

  return (
    <header id="top" className="hero">
      <TerminalWindow title={`${profile.user}@${profile.host}: ~ — zsh`}>
        <div className="boot" aria-label="boot sequence">
          <span className="boot-line">
            <span className="user">{profile.user}@{profile.host}</span>
            <span className="path">:~</span>
            <span className="sym">$</span>
            boot
          </span>
          {BOOT.slice(0, visible).map((line, i) => (
            <span className="boot-line" key={i}>
              {line.status ? (
                <span className="ok">{line.text}</span>
              ) : (
                <>
                  <span className="muted">{line.text}</span>
                  {line.ok && <span className="ok">{"  [ ok ]"}</span>}
                </>
              )}
            </span>
          ))}
          {!booted && (
            <span className="boot-line">
              <span className="cursor" style={{
                display: "inline-block", width: 8, height: "1em",
                background: "var(--accent)", verticalAlign: "text-bottom",
              }} />
            </span>
          )}
        </div>

        {booted && (
          <div className="whoami">
            <div className="who-prompt">
              <TerminalPrompt command="whoami" />
            </div>
            <h1 className="name">{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="blurb">{profile.blurb}</p>
            <div className="stack">
              {profile.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            <div className="commands-block">
              <p className="commands-label">available commands</p>
              <div className="commands-grid">
                {HERO_COMMANDS.map(([cmd, desc]) => (
                  <button key={cmd} type="button" onClick={() => runCommand(cmd)}>
                    <span className="cmd">{cmd}</span>
                    <span className="desc">{desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="cta-row">
              <a href="#projects" className="primary" onClick={(e) => { e.preventDefault(); runCommand("projects"); }}>
                [ View Projects ]
              </a>
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                [ View Resume ]
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); runCommand("contact"); }}>
                [ Contact Me ]
              </a>
            </div>

            <TerminalInput runCommand={runCommand} names={commandNames} />
          </div>
        )}
      </TerminalWindow>
    </header>
  );
};

export default Hero;
