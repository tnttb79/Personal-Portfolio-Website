import { scrollToSection } from "./scroll";
import { resumeUrl, socials } from "../config/portfolio";

export const THEMES = ["dark", "midnight", "matrix"];

// Sections reachable by command -> DOM id.
const SECTIONS = {
  about: "about",
  projects: "projects",
  skills: "skills",
  contact: "contact",
};

/**
 * Build the command registry.
 *
 * @param {object} handlers
 * @param {(t: string) => void} handlers.setTheme
 * @param {() => void} handlers.clearHistory
 * @returns {{ run: (raw: string) => CommandResult, names: string[] }}
 *
 * CommandResult: { lines?: string[], tone?: "ok"|"error"|"muted", clear?: boolean }
 */
export function createCommandRegistry({ setTheme, clearHistory }) {
  const goto = (key) => {
    scrollToSection(SECTIONS[key]);
    return { lines: [`navigating to ./${key}`], tone: "muted" };
  };

  const commands = {
    help: () => ({
      lines: [
        "Available commands:",
        "  about        view background",
        "  skills       view technical stack",
        "  projects     peek at my abandoned projects",
        "  resume       view resume",
        "  contact      get in touch",
        "  theme <name> switch theme (dark | midnight | matrix)",
        "  clear        clear the screen",
        "",
        "Tip: every command has a clickable button too.",
      ],
      tone: "ok",
    }),
    about: () => goto("about"),
    projects: () => goto("projects"),
    skills: () => goto("skills"),
    contact: () => goto("contact"),
    resume: () => {
      window.open(resumeUrl, "_blank", "noopener");
      return { lines: ["opening resume: Thang_Ta_Resume.pdf"], tone: "ok" };
    },
    whoami: () => ({
      lines: [
        "Thang Ta :: Software Developer",
        "React • .NET • Node.js • Python • SQL • Cloud",
      ],
      tone: "ok",
    }),
    email: () => {
      window.open(`mailto:${socials.email}`, "_self");
      return { lines: [`mailto:${socials.email}`], tone: "ok" };
    },
    clear: () => {
      clearHistory();
      return { clear: true };
    },
    theme: (arg) => {
      const name = (arg || "").trim().toLowerCase();
      if (!name) {
        return {
          lines: [`usage: theme <${THEMES.join(" | ")}>`],
          tone: "muted",
        };
      }
      if (!THEMES.includes(name)) {
        return {
          lines: [
            `Unknown theme: ${name}`,
            `Available: ${THEMES.join(", ")}`,
          ],
          tone: "error",
        };
      }
      setTheme(name);
      return { lines: [`theme set to ${name}`], tone: "ok" };
    },
  };

  // Friendly aliases.
  const aliases = { ls: "projects", "ls ./projects": "projects", cls: "clear" };

  function run(raw) {
    const input = raw.trim();
    if (!input) return { lines: [] };

    const lower = input.toLowerCase();
    if (aliases[lower]) return commands[aliases[lower]]();

    const [name, ...rest] = input.split(/\s+/);
    const fn = commands[name.toLowerCase()];
    if (!fn) {
      return {
        lines: [
          `command not found: ${name}`,
          "Type `help` to see available commands.",
        ],
        tone: "error",
      };
    }
    return fn(rest.join(" "));
  }

  return { run, names: Object.keys(commands) };
}
