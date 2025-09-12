import React from "react";
import "../css/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiSpringboot,
  SiKubernetes,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-div container">
      <h2 className="skills-heading display-4">Skills</h2>
      <br />
      <div className="row g-4 justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2">
            <div className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-text">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
