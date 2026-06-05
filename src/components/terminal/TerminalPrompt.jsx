import { profile } from "../../config/portfolio";

const TerminalPrompt = ({ command, path = "~", cursor = false }) => {
  return (
    <div className="terminal-prompt">
      <span className="user">
        {profile.user}@{profile.host}
      </span>
      <span className="path">:{path}</span>
      <span className="sym">$</span>
      <span className="command">{command}</span>
      {cursor && <span className="cursor" aria-hidden="true" />}
    </div>
  );
};

export default TerminalPrompt;
