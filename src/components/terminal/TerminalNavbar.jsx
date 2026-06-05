import "./navbar.scss";
import CommandChip from "./CommandChip";
import { navItems, profile } from "../../config/portfolio";
import { THEMES } from "../../lib/commands";
import { scrollToSection } from "../../lib/scroll";

const THEME_SWATCH = {
  dark: "#00ff88",
  midnight: "#38bdf8",
  matrix: "#22c55e",
};

const TerminalNavbar = ({ theme, setTheme, runCommand }) => {
  const handleNavClick = (e, item) => {
    if (item.external) return; // let the browser open the resume
    e.preventDefault();
    scrollToSection(item.href.replace("#", ""));
  };

  return (
    <>
      <nav className="term-nav" aria-label="Primary">
        <a className="nav-brand" href="#top" onClick={(e) => { e.preventDefault(); scrollToSection("top"); }}>
          <span className="dots" aria-hidden="true">
            <span className="red" />
            <span className="yellow" />
            <span className="green" />
          </span>
          <span className="brand-text">
            <span className="accent">{profile.user}</span>@{profile.host}
            <span style={{ color: "var(--text-muted)" }}>:~$</span>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.command}
              href={item.href}
              className={item.command === "resume" ? "cta" : ""}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="theme-switch" role="group" aria-label="Color theme">
          {THEMES.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={theme === t}
              aria-label={`${t} theme`}
              title={`${t} theme`}
              onClick={() => setTheme(t)}
            >
              <span className="swatch" style={{ background: THEME_SWATCH[t] }} />
            </button>
          ))}
        </div>
      </nav>

      <div className="nav-chips" aria-label="Quick commands">
        {navItems.map((item) => (
          <CommandChip
            key={item.command}
            command={item.command}
            onRun={runCommand}
          />
        ))}
      </div>
    </>
  );
};

export default TerminalNavbar;
