import React from "react";
import "./Footer.scss";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>
          Copyright&copy;2022 All rights reserved. Made by{" "}
          <span>Or Reuben</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return (
              <a
                href={
                  index === 0
                    ? "https://github.com/OrReuben"
                    : index === 1
                    ? "https://www.linkedin.com/in/or-reuben-48b514249/"
                    : index === 2
                    ? "https://www.instagram.com/or_reuben20/"
                    : "tel:+972544793188"
                }
                key={index}
              >
                {socialIcon}
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
