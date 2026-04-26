import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Cross-Origin Iframe Auth",
    img: "/authIframeConsumer.png",
    desc: "A two-origin authentication demo for an embeddable chat widget. The consumer app keeps the API key server-side, requests a short-lived embed token, passes it to the producer iframe with postMessage, and the producer exchanges it for an HttpOnly session cookie for secure chat sessions.",
    technologies:
      "Next.js, TypeScript, Prisma, SQLite, JWT, HttpOnly Cookies, postMessage, Render, etc...",
    demo: "https://auth-iframe-consumer.onrender.com",
    github: "https://github.com/tnttb79/auth-related/tree/main/iframe-auth",
  },
  {
    id: 2,
    title: "Spotify Clone",
    img: "/spotifyClone.png",
    desc: "Vibrant music app featuring diverse genres, top charts, and artist pages. Utilizes the Spotify public API via RapidAPI for a rich collection of songs. Explore location-based songs and enjoy an intuitive search bar for seamless music discovery.",
    technologies:
      "React, TailwindCSS, Redux, Axios, RapidAPI, React Router, Swiper, etc…",
    demo: "https://spotify-clone-bqgr.onrender.com",
    github: "https://github.com/tnttb79/Spotify-Clone-Full-stack_07_03-08_01",
  },
  {
    id: 3,
    title: "Social App",
    img: "/socialApp.png",
    desc: "A full-stack web app where user can create, update, delete, comment, and like posts with image uploads. Full user authentication system, including sign-in, sign-up, and log-out functionalities.",
    technologies:
      "React, TailwindCSS, MongoDB, Express, Redux, JWT, React Router, etc…",
    demo: "https://my-memories-uf61.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-MyGallery-fullstack-MERN-app",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    img: "/adminDashboard.png",
    desc: "An admin dashboard (Front-end) featuring diverse chart types, interactive data tables, and a flexible data grid. Implemented a sleek user interface with light and dark modes for optimal viewing.",
    technologies:
      "React, Material-UI, React Router, Nivo Charts, Formik, Yup, FullCalendar, etc…",
    demo: "https://admin-dashboard-8hz5.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-dashboar-frontend_5_15-6_29",
  },
  {
    id: 5,
    title: "Application Management",
    img: "/ApplicationManagement.png",
    desc: "A modern, full-stack web application for managing job applications and resumes. Built with React, .NET Core, and SQL Server, featuring a beautiful dark/light theme and modern UI components. 🚧 Currently in development with upcoming features including user authentication and deployment.",
    technologies:
      "React, TypeScript, Material-UI, SCSS, .NET Core 8.0, SQL Server, Docker Compose, Entity Framework Core, etc...",
    demo: null,
    github: "https://github.com/tnttb79/ResumeMgtWebAPIDotNet",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p className='technologies'>
              <strong>Techonologies used:</strong> {item.technologies}
            </p>
            <div className='linksContainer'>
              {item.demo ? (
                <a href={item.demo} target='_blank' rel='noreferrer'>
                  See Demo
                </a>
              ) : (
                <button className='demo-disabled' disabled>
                  Demo Coming Soon
                </button>
              )}
              <a href={item.github} target='_blank' rel='noreferrer'>
                See Github
                <img src='/github.png' alt='' />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' id='Portfolio' ref={ref}>
      <div className='progress'>
        <h1>Some of My Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
