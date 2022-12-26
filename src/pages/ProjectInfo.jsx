import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProjectInfo.scss";
import { AiOutlineRight } from "react-icons/ai";

const ProjectInfo = () => {
  const location = useLocation();
  const workInfo = location.state.work;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="single-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
        className="title"
      >
        <span>My Work</span>
        <h1>{workInfo.title}</h1>
        <p className="title-p">{workInfo.description}</p>
      </motion.div>
      <i onClick={() => navigate("/")}>
        <AiOutlineRight />
      </i>
      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
      >
        <div className="right-side">
          <b>{workInfo.role}</b>
          <p>{workInfo.roleInfo}</p>
          <b>Technologies:</b>
          <p>Client: {workInfo.technologies.client}</p>
          {workInfo.technologies.server && (
            <p>Server: {workInfo.technologies.server}</p>
          )}
          <div className="links">
            <a href={workInfo.links.github}>Github</a>
            <a href={workInfo.links.demo}>Demo</a>
            <a href="#architecture">Architecture</a>
          </div>
        </div>
        <div className="left-side">
          <video controls autoPlay>
            <source src={workInfo.video} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectInfo;
