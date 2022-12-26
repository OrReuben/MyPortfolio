import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import { workNavs } from "../../../Data";
import { workImages } from "../../../Data";
import { AiOutlineInfo } from "react-icons/ai";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages);
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="buttons"
      >
        {workNavs.map((workNav, index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}
            >
              {workNav}
            </button>
          );
        })}
      </motion.div>
      {window.innerWidth <= 600 ? (
        <div className="workImages">
          {works.map((work, index) => {
            return (
              <motion.div
                className="workImage"
                key={work.id}
                initial={{ x: 0, opacity: 0 }}
                whileInView={{
                  x: index % 2 ? [-250, 0] : [250, 0],
                  opacity: 1,
                }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: -50 }}
              >
                <img src={work.img} alt="workImg" />
                {work.id === 6 || work.id === 5 ? (
                  <div className="hoverLayer"> COMING SOON </div>
                ) : (
                  <div className="hoverLayer">
                    <motion.a
                      href={
                        work.id === 1
                          ? work.links.github
                          : work.id === 2
                          ? work.links.github
                          : work.id === 3
                          ? work.links.github
                          : work.id === 4
                          ? work.links.github
                          : work.id === 5
                          ? work.links.github
                          : work.links.github
                      }
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <FiGithub />
                    </motion.a>

                    <motion.a
                      href={
                        work.id === 1
                          ? work.links.demo
                          : work.id === 2
                          ? work.links.demo
                          : work.id === 3
                          ? work.links.demo
                          : work.id === 4
                          ? work.links.demo
                          : work.id === 5
                          ? work.links.demo
                          : work.links.demo
                      }
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <FiEye />
                    </motion.a>
                    <motion.a
                      onClick={() =>
                        navigate("project-info", { state: { work: work } })
                      }
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <AiOutlineInfo />
                    </motion.a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      ) : (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, y: -50 }}
          className="workImages"
        >
          {works.map((work) => {
            return (
              <div className="workImage" key={work.id}>
                <img src={work.img} alt="workImg" />
                {work.id === 6 || work.id === 5 ? (
                  <div className="hoverLayer"> COMING SOON </div>
                ) : (
                  <div className="hoverLayer">
                    <motion.a
                      href={
                        work.id === 1
                          ? work.links.github
                          : work.id === 2
                          ? work.links.github
                          : work.id === 3
                          ? work.links.github
                          : work.id === 4
                          ? work.links.github
                          : work.id === 5
                          ? work.links.github
                          : work.links.github
                      }
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <FiGithub />
                    </motion.a>

                    <motion.a
                      href={
                        work.id === 1
                          ? work.links.demo
                          : work.id === 2
                          ? work.links.demo
                          : work.id === 3
                          ? work.links.demo
                          : work.id === 4
                          ? work.links.demo
                          : work.id === 5
                          ? work.links.demo
                          : work.links.demo
                      }
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <FiEye />
                    </motion.a>
                    <motion.a
                      onClick={() =>
                        navigate("project-info", { state: { work: work } })
                      }
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <AiOutlineInfo />
                    </motion.a>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      )}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="talk"
      >
        <div className="talk_left">
          <h3>
            So let's talk about <br /> <span>your next projects</span>
          </h3>
        </div>
        <div className="button_wrapper">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="talk_right"
          >
            <a href="#contact">Contact Me</a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
