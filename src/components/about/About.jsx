import "./about.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const About = () => {
  return (
    <div className='about'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>About Me</motion.h2>
          <motion.p variants={textVariants}>
            🚀Hey there, I'm <motion.strong>Thang Ta</motion.strong>, a
            passionate Software Developer in Phoenix, AZ, armed with a Master's
            in Data Analytics. My coding journey began with SQL and Python for
            data analysis and evolving into self-taught{" "}
            <motion.strong>web development</motion.strong> through building cool
            projects. Outside the tech world, I find joy in learning languages
            and playing soccer. I'm excited to contribute to innovative projects
            and explore new horizons. Connect with me on{" "}
            <a
              href='https://www.linkedin.com/in/thang-ta-a68660240/'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/linkedIn.png' alt='' />
            </a>
            and explore my coding adventures on{" "}
            <a
              href='https://github.com/tnttb79'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/github.png' alt='' />
            </a>
            . Let's code something extraordinary!!!
            <motion.div className='skillsContainer'>
              <motion.p>
                Here are a few <motion.strong>technologies</motion.strong> I’ve
                been working with recently:
              </motion.p>
              <motion.div className='skills'>
                <motion.ul>
                  <motion.li>JavaScripts/TypeScript</motion.li>
                  <motion.li>ReactJS</motion.li>
                  <motion.li>TailwindCSS/BootStrap/MUI </motion.li>
                  <motion.li>Redux </motion.li>
                  <motion.li>CSS </motion.li>
                  <motion.li>HTML </motion.li>
                </motion.ul>
                <motion.ul>
                  <motion.li>Python</motion.li>
                  <motion.li>NodeJS</motion.li>
                  <motion.li>SQL/MongoDB</motion.li>
                  <motion.li>ExpressJS</motion.li>
                  <motion.li>Git/GitHub</motion.li>
                  <motion.li>RestAPI</motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.p>
          <motion.div variants={textVariants} className='buttons'>
            <a href='#Portfolio'>Check Out My Works</a>
            <a href='#Contact'>Contact Me</a>
            <a href='/Thang_Ta_Resume(WD).pdf' target='_blank' rel='noreferrer'>
              View My Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        THANG TA
      </motion.div>
      <div className='imageContainer'>
        <img src='/about.png' alt='' />
      </div>
    </div>
  );
};

export default About;
