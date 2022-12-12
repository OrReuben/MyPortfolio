import React, { useState } from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Contact = () => {
  const [message, setMessage] = useState();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");

  const validation = (e) => {
    if (name.length === 0) {
      setMessage("You must set a name before continuing");
      return false;
    } else if (lastName.length === 0) {
      setMessage("You must set a last name before continuing");
      return false;
    } else if (email.length === 0) {
      setMessage("You must set a valid email before continuing");
      return false;
    } else if (phone.length === 0 || phone.length !== 10) {
      setMessage("You must set a valid phone before continuing");
      return false;
    } else if (text.length < 10) {
      setMessage("You must set a valid text before continuing");
      return false;
    } else return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validation(e)) {
      emailjs
        .sendForm("gmail", "template_jer7fnn", e.target, "dDJ8bwVQMepF3GZou")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      toast.success("Successfully sent an email! THANKS!", toastOptions);
    } else toast.error(message, toastOptions);
  };

  return (
    <>
      <div className="container" id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="title"
        >
          <span>get in touch</span>
          <h1>Contact Me</h1>
        </motion.div>
        <div className="contact_form">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_left_container"
          >
            <h3>Just Say Hi</h3>
            <p className="contact_text">
              Get in touch with me! Let's begin turning your dreams into
              reality..
            </p>
            {contacts.map((contact) => {
              return (
                <div className="contact_left" key={contact.id}>
                  <div className="icon">{contact.icon}</div>
                  <p>{contact.infoText}</p>
                </div>
              );
            })}
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
          </motion.div>
          <motion.form
            onSubmit={sendEmail}
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_right"
          >
            <h3>Get In Touch</h3>
            <div className="row">
              <input
                type="text"
                placeholder="First Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row">
              <textarea
                placeholder="Message"
                name="message"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
            >
              <h5>Send</h5>
            </motion.button>
          </motion.form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
