import img1 from "../assets/images/Memories_saver.png";

import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import img2 from "../assets/images/ReactTodo.png";

import img3 from "../assets/images/ColorGenerator.png";

const ProjectData = [
  {
    id: 1,
    title: "Memories_saver",
    img: img1,
    discription:
      "The App saves data of the creator.It will store images,date of creation and update,creater name etc.I have learned MERN STACK (MONGODB EXPRESS REACT NODE) ",
    techstack: [FaReact, FaHtml5, FaCss3, SiNetlify],
  },
  {
    id: 2,
    title: "Todo App with React",
    img: img2,
    discription:
      "The First non tutorial App I made by my self.This App saves todos and due date and creates a timer to complete the task.It also stores the todos in local storage.",
    techstack: [FaReact, FaHtml5, FaCss3, SiNetlify],
  },
  {
    id: 3,
    title: "Color Generator",
    img: img3,
    discription: "This App can Generator shades of Color specified",
    techstack: [FaReact, FaHtml5, FaCss3, SiNetlify],
  },
];
// purpose: " Purpose of the project: Why did you start the project.",
// objective: "Objective: What you accomplished.",
// approach: "Approach: How you accomplished it.",
// project_duration: "Project duration: How long it took you.",

// Final product overview: Pictures, videos, links, etc.

export default ProjectData;
