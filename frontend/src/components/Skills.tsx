// src/components/Skills.tsx
import React from "react";
import "../css/Skills.css";

const Skills: React.FC = () => {
  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "Agile",
  ];

  return (
    <section id="skills" className="container py-5 text-center text-light">
      <h2 className="display-5 fw-bold mb-4">Skills</h2>
      <div className="row g-3 justify-content-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="col-6 col-md-3">
            <div className="card bg-dark text-light shadow-sm p-3 h-100">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
