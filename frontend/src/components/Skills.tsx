// src/components/Skills.tsx
import React from "react";
import "../css/Skills.css";

type Skill = {
  name: string;
  level?: number; // optional 0-100
};

type Category = {
  title: string;
  skills: Skill[];
};

const skillsData: Category[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "VSCode" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving" },
      { name: "Communication" },
      { name: "Teamwork" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="section-title display-5 mb-4">Skills</h2>
        <div className="row g-4">
          {skillsData.map((cat) => (
            <div key={cat.title} className="col-12 col-md-6 col-lg-3">
              <div className="skill-card p-3 h-100">
                <h3 className="skill-card-title mb-3">{cat.title}</h3>
                <ul className="list-unstyled mb-0">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="skill-item d-flex align-items-center justify-content-between"
                    >
                      <div className="skill-left d-flex align-items-center">
                        <span className="skill-dot" aria-hidden></span>
                        <span className="skill-name ms-2">{s.name}</span>
                      </div>

                      {/* Progress bar shown when level is provided */}
                      {typeof s.level === "number" ? (
                        <div
                          className="skill-bar-wrapper ms-3 w-50"
                          aria-hidden={false}
                        >
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${s.level}%` }}
                              aria-valuenow={s.level}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
