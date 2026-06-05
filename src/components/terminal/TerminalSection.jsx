import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import TerminalPrompt from "./TerminalPrompt";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const TerminalSection = ({ id, command, title, path = "~", children }) => {
  return (
    <motion.section
      id={id}
      className="terminal-section"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      aria-labelledby={`${id}-heading`}
    >
      <TerminalWindow title={title}>
        <h2 id={`${id}-heading`} className="sr-only-heading">
          {title}
        </h2>
        <TerminalPrompt command={command} path={path} />
        <div className="terminal-output">{children}</div>
      </TerminalWindow>
    </motion.section>
  );
};

export default TerminalSection;
