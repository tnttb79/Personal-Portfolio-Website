import { useRef, useState } from "react";
import { profile } from "../../config/portfolio";

/**
 * Optional command line. Fully keyboard-accessible and never required —
 * everything it does is also reachable via buttons/links.
 *
 * @param {(raw: string) => { lines?: string[], tone?: string, clear?: boolean }} runCommand
 */
const TerminalInput = ({ runCommand, names = [] }) => {
  const [value, setValue] = useState("");
  const [log, setLog] = useState([]); // [{ input, lines, tone }]
  const [history, setHistory] = useState([]); // raw commands
  const [histIndex, setHistIndex] = useState(-1);
  const inputRef = useRef(null);
  const promptStr = `${profile.user}@${profile.host}:~$`;

  const submit = (e) => {
    e.preventDefault();
    const raw = value.trim();
    if (!raw) return;

    const result = runCommand(raw);
    setHistory((h) => [...h, raw]);
    setHistIndex(-1);

    if (result.clear) {
      setLog([]);
    } else {
      setLog((l) => [
        ...l,
        { input: raw, lines: result.lines || [], tone: result.tone },
      ]);
    }
    setValue("");
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next = histIndex < 0 ? history.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(next);
      setValue(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndex < 0) return;
      const next = histIndex + 1;
      if (next >= history.length) {
        setHistIndex(-1);
        setValue("");
      } else {
        setHistIndex(next);
        setValue(history[next]);
      }
    } else if (e.key === "Tab") {
      // Lightweight autocomplete against known command names.
      const partial = value.trim().toLowerCase();
      if (!partial) return;
      const match = names.find((n) => n.startsWith(partial));
      if (match) {
        e.preventDefault();
        setValue(match);
      }
    }
  };

  return (
    <div className="terminal-input">
      {log.length > 0 && (
        <div className="ti-history" aria-live="polite">
          {log.map((entry, i) => (
            <div key={i}>
              <div className="ti-echo">
                <span className="user">{profile.user}@{profile.host}</span>
                <span className="path">:~</span>
                <span className="sym">$</span>
                {entry.input}
              </div>
              {entry.lines.map((line, j) => (
                <div className={`ti-out ${entry.tone || ""}`} key={j}>
                  {line || " "}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <form className="ti-line" onSubmit={submit}>
        <span className="ti-prompt" aria-hidden="true">{promptStr}</span>
        <label className="sr-only-heading" htmlFor="terminal-command">
          Terminal command input
        </label>
        <input
          id="terminal-command"
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="type a command — try `help`"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </form>
      <p className="ti-hint">
        ↑/↓ history · Tab to autocomplete · optional — use the buttons above if you prefer
      </p>
    </div>
  );
};

export default TerminalInput;
