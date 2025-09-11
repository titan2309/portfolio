import React from "react";
import "../css/About.css";

const About: React.FC = () => {
  return (
    <>
      <div className="div-about container">
        <div className="row about-row">
          <div className="about-head">
            <h1 className="about-heading display-4">About Me</h1>
            <br />
            <div className="col-md-6">
              <p className="lead about-lead-text">
                Hey, I’m{" "}
                <span className="about-strong-text">Hardik Rathore</span> — a
                Full-Stack Developer who turns{" "}
                <span className="about-strong-text">coffee into code </span>
                and random ideas into apps that actually work (most of the
                time). I live in the world of{" "}
                <span className="about-strong-text">Java</span> and the
                <span className="about-strong-text"> MERN stack</span>, building
                things that are secure, fast, and hopefully a little fun to use.
              </p>
              <br />
              <p className="lead about-lead-text">
                I’ve shipped projects ranging from{" "}
                <span className="about-strong-text">E-Commerce platforms</span>{" "}
                that keep carts full, to{" "}
                <span className="about-strong-text">productivity apps </span>
                that (ironically) I use to procrastinate. I thrive at the
                crossroads of{" "}
                <span className="about-strong-text">user experience</span>,
                <span className="about-strong-text"> security</span>, and
                <span className="about-strong-text"> scalability</span>.
              </p>
              <br />
              <p className="lead about-lead-text">
                Right now, I’m aiming to grow into a{" "}
                <span className="about-strong-text">Cloud Expert</span> and{" "}
                <span className="about-strong-text">Engineer</span> who believes
                that good software shouldn’t just work — it should{" "}
                <span className="about-strong-text">Delight</span>. (And if it
                breaks, at least break in style.)
              </p>
              <br />
              <p className="lead about-lead-text">
                Outside of code, you’ll probably find me{" "}
                <span className="about-strong-text">gaming</span>,
                <span className="about-strong-text"> lifting weights</span>, or
                plotting how to debug life itself. 🚀
              </p>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
