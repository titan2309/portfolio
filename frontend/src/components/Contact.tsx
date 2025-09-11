// src/components/Contact.tsx
import React from "react";
import "../css/Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container py-5 text-center text-light">
      <h2 className="display-5 fw-bold mb-4">Contact</h2>
      <p className="lead">Let’s connect! 👇</p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <a
          href="mailto:9981640606hardik@gmail.com"
          className="btn btn-outline-light"
        >
          Email
        </a>
        <a
          href="https://github.com/hardikrathore"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/hardikrathore"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
