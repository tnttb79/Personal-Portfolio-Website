import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const techIcons = [
  ["react", "/paralaxIcons/react.png"],
  ["javascript", "/paralaxIcons/javaScript.png"],
  ["typescript", "/paralaxIcons/typeScript.png"],
  ["python", "/paralaxIcons/python.png"],
  ["csharp", "/paralaxIcons/cSharp.png"],
  ["docker", "/paralaxIcons/docker.png"],
  ["html", "/paralaxIcons/html.png"],
  ["css", "/paralaxIcons/css.png"],
];

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <div className='parallax command-grid scan-lines' ref={ref}>
      <div className='code-decoration line-numbers'>
        {[...Array(8)].map((_, i) => (
          <span key={i}>{(i + 12).toString().padStart(2, "0")}</span>
        ))}
      </div>

      <div className='code-decoration code-snippets'>
        <div className='comment'>{"// Welcome to my digital space"}</div>
        <div>
          <span className='keyword'>const</span> portfolio = {`{`}
        </div>
        <div>
          &nbsp;&nbsp;creator: <span className='string'>&quot;Thang&quot;</span>,
        </div>
        <div>
          &nbsp;&nbsp;passion:{" "}
          <span className='string'>&quot;Building amazing software&quot;</span>
        </div>
        <div>{`}`};</div>
      </div>

      <div className='floating-elements'>
        <div className='element'>{"<code/>"}</div>
        <div className='element'>useEffect()</div>
        <div className='element'>docker build</div>
      </div>

      <div className='content-wrapper'>
        <motion.div
          className='eyebrow'
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span></span>
          software systems portfolio
        </motion.div>
        <motion.h1 style={{ y: yText }}>
          Hi! I&apos;m Thang
          <span className='role'>Software Developer</span>
        </motion.h1>
        <motion.div
          className='subtitle'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Crafting elegant solutions through code
        </motion.div>
        <motion.div
          className='hero-actions'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a href='#Portfolio'>Check Out My Works</a>
          <a href='/Thang_Ta_Resume(WD).pdf' target='_blank' rel='noreferrer'>
            View My Resume
          </a>
        </motion.div>
      </div>

      <motion.div className='tech-icons' style={{ y: yBg }}>
        {techIcons.map(([name, image]) => (
          <div
            className={`icon ${name}`}
            key={name}
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
        ))}
      </motion.div>

      <div className='scroll-indicator'>
        <span>Explore my journey</span>
      </div>
    </div>
  );
};

export default Parallax;
