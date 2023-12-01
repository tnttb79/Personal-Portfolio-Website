import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const textVariants = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
         Hi! I'm Thang,<br/> a Web Developer <br/>
         <p>Scroll down for more</p>
         <motion.img
            variants={textVariants}
            animate='scrollButton'
            src='/scroll.png'
            alt=''
          />
      </motion.h1>
      <motion.div className="buildings"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: "url(/planets.png)",
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="sky"></motion.div>
    </div>
  );
};

export default Parallax;
