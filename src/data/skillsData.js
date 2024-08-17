import {
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiTypescript, SiGraphql, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <FaJs size={40} color="#F7DF1E" />,
    top: 20,
    left: 30,
    rotate: -10,
  },
  {
    name: "Python",
    icon: <FaPython size={40} color="#306998" />,
    top: 150,
    left: 70,
    rotate: 20,
  },
  {
    name: "React",
    icon: <FaReact size={40} color="#61DAFB" />,
    top: 100,
    left: 200,
    rotate: -5,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} color="#68A063" />,
    top: 200,
    left: 120,
    rotate: 15,
  },
  {
    name: "CSS",
    icon: <FaCss3 size={40} color="#264de4" />,
    top: 50,
    left: 250,
    rotate: -20,
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={40} color="#e34f26" />,
    top: 300,
    left: 50,
    rotate: 10,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} color="#007ACC" />,
    top: 250,
    left: 180,
    rotate: -25,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql size={40} color="#e535ab" />,
    top: 120,
    left: 300,
    rotate: 5,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} color="#4DB33D" />,
    top: 180,
    left: 40,
    rotate: 30,
  },
  {
    name: "SQL",
    icon: <SiMysql size={40} color="#4479A1" />,
    top: 220,
    left: 300,
    rotate: -15,
  },
  {
    name: "Docker",
    icon: <FaDocker size={40} color="#2496ED" />,
    top: 280,
    left: 70,
    rotate: 0,
  },
  {
    name: "AWS",
    icon: <FaAws size={40} color="#FF9900" />,
    top: 150,
    left: 150,
    rotate: 10,
  },
];

export default skills;
