// src/components/Contact.tsx
import React from "react";
import "../css/Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="section-title display-5 mb-4">Contact</h2>
        <div className="row g-4">
          {/* Left side - info */}
          <div className="col-12 col-md-5">
            <div className="contact-info p-3 h-100">
              <h3 className="contact-heading mb-3">Get in Touch</h3>
              <p>
                I’m always open to discussing new opportunities, projects, or
                collaborations. Feel free to reach out!
              </p>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  hardik.rathore@example.com
                </li>
                <li className="mb-2">
                  <i className="bi bi-phone-fill me-2"></i>
                  +91 9981640606
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Indore, India
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - form */}
          <div className="col-12 col-md-7">
            <form className="contact-form p-3">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn contact-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
