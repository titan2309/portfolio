import React from "react";
import "../css/Contact.css";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { BsGeoAltFill } from "react-icons/bs";

const Contact: React.FC = () => {
  return (
    <div className="contact-div container">
      <h1 className="contact-heading display-4">Contact</h1>
      <br />
      <div className="row contact-content">
        <div className="col-md-5 contact-info">
          <h3 className="get-in-touch-heading">Get in Touch</h3>
          <br />
          <div className="get-in-touch">
            <div>
              <h1 className="get-in-touch-icon">
                <MdEmail />
              </h1>
              <p className="get-in-touch-text lead">hardik@example.com</p>
            </div>
            <div>
              <h2 className="get-in-touch-icon">
                <MdPhoneIphone />
              </h2>
              <p className="get-in-touch-text lead">+91 99816 40606</p>
            </div>
            <div>
              <h2 className="get-in-touch-icon">
                <BsGeoAltFill />
              </h2>
              <p className="get-in-touch-text lead">Indore, India</p>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <form className="contact-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label contact-form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control contact-form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label contact-form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control contact-form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="message"
                className="form-label contact-form-label"
              >
                Message
              </label>
              <textarea
                className="form-control contact-form-control"
                id="message"
                rows={4}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-md contact-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
