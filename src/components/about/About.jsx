import "./about.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.08,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-180%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 24,
    },
  },
};

const skillColumns = [
  [
    "JavaScript/TypeScript",
    "React/Next.js/React Native",
    "C#/ASP.NET Core",
    "Node.js (Express/NestJS)",
    "Python (FastAPI)",
    "C++",
  ],
  [
    "SQLServer/PostgreSQL/MongoDB/Redis",
    "EF Core/SQLAlchemy/Mongoose",
    "REST/GraphQL",
    "Kafka/RabbitMQ",
    "Docker/Kubernetes",
    "AWS/Azure/Azure DevOps (AKS)",
  ],
];

const About = () => {
  return (
    <div className='about'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.h2 variants={textVariants}>About Me</motion.h2>
          <motion.p variants={textVariants}>
            Hey there, I&apos;m <strong>Thang Ta</strong>, a passionate
            Software Developer. My coding journey began with SQL and Python for
            data analysis and evolved into <strong>Software Development</strong>{" "}
            through building many cool projects. Outside the tech world, I find
            joy in learning languages and playing soccer. I&apos;m excited to
            contribute to innovative projects and explore new horizons. Connect
            with me on{" "}
            <a
              href='https://www.linkedin.com/in/thang-ta-a68660240/'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/linkedIn.png' alt='' />
            </a>{" "}
            or explore my coding adventures on{" "}
            <a
              href='https://github.com/tnttb79'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/github.png' alt='' />
            </a>
            . Let&apos;s code something extraordinary!!!
          </motion.p>

          <motion.div className='skillsContainer' variants={textVariants}>
            <p>
              Here are a few <strong>technologies</strong> I&apos;ve been
              working with recently:
            </p>
            <div className='skills'>
              {skillColumns.map((items, index) => (
                <div className='skillGroup' key={index}>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={textVariants} className='buttons'>
            <a href='/Thang_Ta_Resume(WD).pdf' target='_blank' rel='noreferrer'>
              View My Resume
            </a>
            <a href='#Portfolio'>Check Out My Works</a>
            <a href='#Contact'>Contact Me</a>
          </motion.div>
        </motion.div>

        <div className='visualPanel'>
          <div className='avatarShell'>
            <img src='/about.png' alt='Thang Ta profile illustration' />
          </div>
        </div>
      </div>

      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        THANG TA
      </motion.div>
    </div>
  );
};

export default About;
