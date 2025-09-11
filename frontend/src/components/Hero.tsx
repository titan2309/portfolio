import React, { useEffect, useRef } from "react";
import "../css/Hero.css";
import resume from "../assets/resume.pdf";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const words = [
    "I build scalable web apps",
    "I build interactive web experiences",
    "I build clean & modern interfaces",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 25;
      const y = (e.clientY / innerHeight - 0.5) * 25;

      heroRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="hero-div" ref={heroRef}>
        <div>
          <h1 className="hero-heading display-3">Hi, I'm Hardik! 💻</h1>
          <p className="lead hero-lead-text">
            <Typewriter
              words={words}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </div>
        <div className="cta-links gap-3">
          <a className="btn  btn-lg cta-btn-1 shadow" href="#projects">
            View Projects
          </a>
          <a className="btn  btn-lg cta-btn-2" href={resume} download>
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
