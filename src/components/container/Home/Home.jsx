import React from "react";
import portfolio from "../../../assets/תמונת פרופיל ללינקדין.jpg";
import "./Home.scss";
import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Or Reuben</span>{" "}
        </h3>
        <span className="job">And I'm A Fullstack Developer</span>
        <span className="text">
          Passionate
          <br /> to craft innovative <br /> web products.
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">Frontend Developer</div>
        <div className="freelance">Freelancer</div>
        <div className="backend">Backend Developer</div>
      </div>
      <a href="#about" className="scroll-down">
        <h3>SCROLL DOWN</h3>
        <div className="scroll-icon">
          <AiOutlineDown />
        </div>
      </a>
    </motion.div>
  );
};

export default Home;
