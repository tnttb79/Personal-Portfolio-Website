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
            🚀Hey there, I&apos;m <motion.strong>Thang Ta</motion.strong>, a
            passionate Software Developer. My coding journey began with SQL and
            Python for data analysis and evolved into{" "}
            <motion.strong>Software Development</motion.strong> through building
            many cool projects. Outside the tech world, I find joy in learning
            languages and playing soccer. I&apos;m excited to contribute to
            innovative projects and explore new horizons. Connect with me on{" "}
            <a
              href='https://www.linkedin.com/in/thang-ta-a68660240/'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/linkedIn.png' alt='' />
            </a>
            or explore my coding adventures on{" "}
            <a
              href='https://github.com/tnttb79'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/github.png' alt='' />
            </a>
            . Let&apos;s code something extraordinary!!!
            <motion.div className='skillsContainer'>
              <motion.p>
                Here are a few <motion.strong>technologies</motion.strong>{" "}
                I&apos;ve been working with recently:
              </motion.p>
              <motion.div className='skills'>
                <motion.ul>
                  <motion.li>JavaScript/TypeScript</motion.li>
                  <motion.li>React/Next.js/React Native</motion.li>
                  <motion.li>C#/ASP.NET Core</motion.li>
                  <motion.li>Node.js (Express/NestJS)</motion.li>
                  <motion.li>Python (FastAPI)</motion.li>
                  <motion.li>C++</motion.li>
                </motion.ul>
                <motion.ul>
                  <motion.li>SQLServer/PostgreSQL/MongoDB/Redis</motion.li>
                  <motion.li>EF Core/SQLAlchemy/Mongoose</motion.li>
                  <motion.li>REST/GraphQL</motion.li>
                  <motion.li>Kafka/RabbitMQ</motion.li>
                  <motion.li>Docker/Kubernetes</motion.li>
                  <motion.li>AWS/Azure/Azure DevOps (AKS)</motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.p>
          <motion.div variants={textVariants} className='buttons'>
            <a href='/Thang_Ta_Resume(WD).pdf' target='_blank' rel='noreferrer'>
              <span className='keyword'>View</span>
              <span className='param'>My</span>
              <span>Resume</span>
            </a>
            <a href='#Portfolio'>Check Out My Works</a>
            <a href='#Contact'>Contact Me</a>
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
