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
import {FiFramer} from 'react-icons/fi'
import {BiGitMerge} from 'react-icons/bi'
import { DiJavascript } from "react-icons/di";
import {TbCSharp} from 'react-icons/tb'
import { SiTypescript, SiMaterialui, SiTailwindcss, SiMongodb, SiRedux, SiMysql } from "react-icons/si";
import work1 from "./assets/BidIt.png";
import work2 from "./assets/ChatApp.png";
import work3 from "./assets/NetflixApp.png";
import work4 from "./assets/Dimona.jpeg";
import work5 from "./assets/MiddleProject.png";
import work6 from "./assets/Pizza.png";

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
  <SiMysql />
];

export const educations = [
  {
    id: 1,
    year: "2022",
    position: "Fullstack Course",
    company: "CyberPro Israel",
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
    img: work1,
    name: "project 1",
    category: "app",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "app",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "app",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "design",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
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
