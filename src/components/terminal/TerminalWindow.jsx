import "./terminal.scss";
import { profile } from "../../config/portfolio";

const TerminalWindow = ({ title = `${profile.user}@${profile.host}: ~`, children, className = "" }) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
};

export default TerminalWindow;
