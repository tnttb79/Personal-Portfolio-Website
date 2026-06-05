import { useCallback, useEffect, useMemo, useState } from "react";
import Cursor from "./components/cursor/Cursor";
import TerminalNavbar from "./components/terminal/TerminalNavbar";
import TerminalSection from "./components/terminal/TerminalSection";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import RecruiterBanner from "./components/banner/RecruiterBanner";
import SimpleView from "./components/simple/SimpleView";
import { createCommandRegistry, THEMES } from "./lib/commands";
import { profile, socials } from "./config/portfolio";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("theme");
  return THEMES.includes(saved) ? saved : "dark";
};

const getInitialMode = () => {
  if (typeof window === "undefined") return "terminal";
  return window.localStorage.getItem("viewMode") === "simple"
    ? "simple"
    : "terminal";
};

const App = () => {
  const [theme, setThemeState] = useState(getInitialTheme);
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    window.localStorage.setItem("viewMode", mode);
  }, [mode]);

  const enterSimple = useCallback(() => {
    setMode("simple");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const exitSimple = useCallback(() => {
    setMode("terminal");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const setTheme = useCallback((t) => {
    if (THEMES.includes(t)) setThemeState(t);
  }, []);

  const registry = useMemo(
    () => createCommandRegistry({ setTheme, clearHistory: () => {} }),
    [setTheme]
  );

  // runCommand executes a command and returns the result (used by TerminalInput).
  const runCommand = useCallback((raw) => registry.run(raw), [registry]);

  if (mode === "simple") {
    return <SimpleView onExit={exitSimple} />;
  }

  return (
    <>
      <Cursor />
      <RecruiterBanner onSwitch={enterSimple} />
      <TerminalNavbar theme={theme} setTheme={setTheme} runCommand={runCommand} />

      <main className="site-main">
        <Hero runCommand={runCommand} commandNames={registry.names} />

        <TerminalSection id="about" command="cat about.md" title="about.md">
          <About runCommand={runCommand} />
        </TerminalSection>

        <TerminalSection id="skills" command="skills --grouped" title="skills.json">
          <Skills />
        </TerminalSection>

        <TerminalSection id="projects" command="ls ./projects" title="~/projects" path="~/projects">
          <Projects />
        </TerminalSection>

        <TerminalSection id="contact" command="./contact.sh" title="contact">
          <Contact />
        </TerminalSection>
      </main>

      <footer className="site-footer">
        <span className="foot-prompt mono">
          <span className="accent">{profile.user}@{profile.host}</span>:~$ echo &quot;thanks for visiting&quot;
        </span>
        <span className="mono">
          © {new Date().getFullYear()} {profile.name} ·{" "}
          <a href={socials.github} target="_blank" rel="noreferrer">github</a> ·{" "}
          <a href={socials.linkedin} target="_blank" rel="noreferrer">linkedin</a>
        </span>
      </footer>
    </>
  );
};

export default App;
