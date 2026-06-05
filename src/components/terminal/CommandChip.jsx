const CommandChip = ({ command, label = command, onRun }) => {
  return (
    <button
      type="button"
      className="command-chip"
      onClick={() => onRun(command)}
      title={`Run: ${command}`}
    >
      {label}
    </button>
  );
};

export default CommandChip;
