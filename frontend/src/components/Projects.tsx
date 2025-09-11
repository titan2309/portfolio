// src/components/Projects.tsx
import React from "react";
import "../css/Projects.css";

const Projects: React.FC = () => {
  return (
    <div className="div-projects container">
      <div className="projects-head">
        <h1 className="projects-heading display-4">Projects</h1>
      </div>
      <br />
      <div className="row project-row">
        <div className="col-md-6">
          <div className="project-1">
            <div className="card project-card">
              <div className="card-body ">
                <h2 className="project-title">
                  ShopEase – E-Commerce Platform
                </h2>
                <p className="lead project-title-text">
                  A modern <span className="project-strong">MERN stack</span>{" "}
                  e-commerce app designed for a seamless shopping experience.
                  Users get smooth cart & checkout, while admins get powerful
                  dashboards for managing products & orders.
                </p>
                <ul className="project-bullets">
                  <li>
                    🔐 Secure authentication & role-based authorization (JWT).
                  </li>
                  <li>
                    📦 Dynamic product listings, cart, and order tracking
                    system.
                  </li>
                  <li>
                    🛠️ RESTful APIs built with Express.js for products, orders,
                    and admin tools.
                  </li>
                  <li>
                    🎨 Responsive UI using Bootstrap (desktop & mobile
                    optimized).
                  </li>
                  <li>
                    ⚡ Focused on scalability, error handling, and performance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="project-2">
            <div className="card project-card">
              <div className="card-body">
                <h2 className="project-title">SkyScribe – Note-Taking App</h2>
                <p className="lead project-title-text">
                  A distraction-free note-taking app ✍️ with multi-theme views,
                  secure auth, and full CRUD support. Perfect for jotting down
                  ideas or… writing that to-do list you’ll ignore later.
                </p>
                <ul className="project-bullets">
                  <li>
                    🌗 Light & dark themes powered by CSS + React state
                    management.
                  </li>
                  <li>🔐 User authentication and JWT-based sessions.</li>
                  <li>
                    📝 Full CRUD functionality for notes (create, update,
                    delete).
                  </li>
                  <li>
                    🛡️ Route protection & secure MongoDB storage per user.
                  </li>
                  <li>
                    ⚡ Optimized UX with smooth transitions and fast
                    performance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
