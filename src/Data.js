import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaBootstrap,
} from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { BiGitMerge } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { TbCSharp } from "react-icons/tb";
import {
  SiTypescript,
  SiMaterialui,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiMysql,
} from "react-icons/si";
import bidit from "./assets/BidIt.png";
import chatApp from "./assets/ChatApp.png";
import dimonaApp from "./assets/Dimona.jpeg";
import adamVeHava from "./assets/MiddleProject.png";
import Social from "./assets/Social.png";
import PizzaAppImg from "./assets/Pizza.png";
import ChatibVideo from "./assets/Chatib.mp4";
import DimonaVideo from "./assets/Dimona.mp4";
import AdamVeHavaVideo from "./assets/AdamVeHava.mp4";
import BidItVideo from "./assets/BidIt.mp4";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <FaGithub />,
  <FaLinkedin />,
  <FaInstagram />,
  <FaPhone />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Or Reuben",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+972544793188",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "orreuvenz@gmail.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaNodeJs />,
  <FaSass />,
  <FaBootstrap />,
  <SiMaterialui />,
  <FiFramer />,
  <SiTailwindcss />,
  <SiMongodb />,
  <BiGitMerge />,
  <TbCSharp />,
  <SiRedux />,
  <SiMysql />,
];

export const educations = [
  {
    id: 1,
    year: "2022",
    position: "Fullstack Course",
    company: "CyberPro Israel",
  },
  {
    id: 2,
    year: "2022",
    position: "Azure Fundamentals Training",
    company: "Microsoft Israel",
  },

];
export const finishes = [
  {
    id: 1,
    number: "6+",
    itemName: "Projects",
  },
  {
    id: 2,
    number: "1200+",
    itemName: "Development Hours",
  },
  {
    id: 3,
    number: "5+",
    itemName: "Collaborations",
  },
];
export const workImages = [
  {
    id: 1,
    img: bidit,
    name: "project 1",
    category: "app",
    links: {
      github: "https://github.com/OrReuben/Shop",
      demo: "https://bidit-shop.netlify.app/",
    },
    title: "Bidit",
    description: "A modern advanced auction house for clothings",
    video: BidItVideo,
    role: "Fullstack developer",
    roleInfo: "Organized and implemented site design, development and content.",
    technologies: {
      client: [
        "ReactJS, ",
        "Redux, ",
        "Axios, ",
        "Styled-Components, ",
        "Stripe",
      ],
      server: [
        "NodeJS, ",
        "Express, ",
        "MongoDB, ",
        "Mongoose, ",
        "Stripe, ",
        "JWT, ",
        "CryptoJS",
      ],
    },
  },
  {
    id: 2,
    img: chatApp,
    name: "project 2",
    category: "app",
    links: {
      github: "https://github.com/OrReuben/ChatApp",
      demo: "https://chatsite-app.netlify.app/",
    },
    title: "Chatib",
    description:
      "An advanced public chat platform, send messages across the globe to your friends!",
    video: ChatibVideo,
    role: "Fullstack Developer",
    roleInfo:
      "Designed and executed the development of the site, from picking the technologies to writing the code",
    technologies: {
      client: [
        "ReactJS, ",
        "React-toastify, ",
        "Axios, ",
        "Socket.io-client, ",
        "Styled-Components",
      ],
      server: [
        "NodeJS, ",
        "Express, ",
        "MongoDB, ",
        "Mongoose, ",
        "Socket.io, ",
        "bcrypt",
      ],
    },
  },
  {
    id: 3,
    img: dimonaApp,
    name: "project 3",
    category: "app",
    links: {
      github: "https://github.com/OrReuben/DimonaApp",
      demo: "https://dimona-citizen.netlify.app/",
    },
    title: "Municipality System",
    description:
      "A smart management system for municipality citizen and workers. Built out of 2 different websites, and 2 different servers",
    video: DimonaVideo,
    role: "Lead Developer, Development Team Leader",
    roleInfo:
      "Collaboration project with 4 developers - In charge of clean code and code reviews, github tree branches, the design and color pallete, functionality and solving complex problems",
    technologies: {
      client: [
        "ReactJS, ",
        "Bootstrap, ",
        "Axios, ",
        "MUI, ",
        "Apex Charts, ",
        "Framer Motion",
      ],
      server: [
        "NodeJS, ",
        "Express, ",
        "MongoDB, ",
        "Mongoose, ",
        "JWT, ",
        "CryptoJS, ",
        "Twilio",
      ],
    },
  },
  {
    id: 4,
    img: adamVeHava,
    name: "project 4",
    category: "design",
    links: {
      github: "https://github.com/OrReuben/MiddleProject",
      demo: "https://hava-ve-adam.netlify.app/",
    },
    title: "Adam Ve Hava",
    description: "A frontend website for info and purchasing of wedding events",
    video: AdamVeHavaVideo,
    role: "Frontend developer",
    roleInfo:
      "Collaboration project with 3 developers - In charge of responsive website design, library picking, github management, and site workflow",
    technologies: {
      client: ["ReactJS, ", "Yup, ", "Formik, ", "Redux, ", "MUI"],
    },
  },
  {
    id: 5,
    img: PizzaAppImg,
    name: "project 5",
    category: "app",
    links: {
      github: "netflix",
      demo: "netflix",
    },
    title: "Netflix App",
    description:
      "One of my first ReactJS projects, upload your favorite movies",
    video: "",
    role: "Frontend developer",
    roleInfo: "Designed and built the functionalities from scratch",
    technologies: { client: ["ReactJS, ", "CSS"] },
  },
  {
    id: 6,
    img: Social,
    name: "project 6",
    category: "app",
    links: {
      github: "https://github.com/OrReuben/SecondProject",
      demo: "https://github.com/OrReuben/SecondProject",
    },
    title: "",
    description: "",
    video: "",
    role: "",
    roleInfo: "",
    technologies: "",
  },
];

export const workNavs = ["All", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Modi'in Macabim Reut",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "orreuvenz@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+972-544-793-188",
  },
];
