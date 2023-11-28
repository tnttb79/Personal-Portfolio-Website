import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Spotify Clone",
    img: "/spotifyClone.png",
    desc: "Vibrant music app featuring diverse genres, top charts, and artist pages. Utilizes the Spotify public API via RapidAPI for a rich collection of songs. Explore location-based songs and enjoy an intuitive search bar for seamless music discovery.",
    technologies:
      "React, TailwindCSS, Redux, Axios, RapidAPI, React Router, Swiper, etc…",
    demo: "https://spotify-clone-bqgr.onrender.com",
    github: "https://github.com/tnttb79/spotify-clone_07_03-08_01/tree/main/spotify-clone"
  },
  {
    id: 2,
    title: "Social App",
    img: "/socialApp.png",
    desc: "A full-stack web app where user can create, update, delete, comment, and like posts with image uploads. Full user authentication system, including sign-in, sign-up, and log-out functionalities.",
    technologies:
      "React, TailwindCSS, MongoDB, Express, Redux, JWT, React Router, etc…",
    demo: "https://my-memories-uf61.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-MyGallery-fullstack-MERN-app"
  },
  {
    id: 3,
    title: "Admin Dashboard",
    img: "/adminDashboard.png",
    desc: "An admin dashboard (Front-end) featuring diverse chart types, interactive data tables, and a flexible data grid. Implemented a sleek user interface with light and dark modes for optimal viewing.",
    technologies:
      "React, Material-UI, React Router, Nivo Charts, Formik, Yup, FullCalendar, etc…",
    demo: "https://admin-dashboard-8hz5.onrender.com",
    github: "https://github.com/tnttb79/WEB-REACT-dashboar-frontend_5_15-6_29"
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
              <a href={item.demo}>See Demo</a>
              <a href={item.github}>
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
    <div className='portfolio' id="Portfolio" ref={ref}>
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
