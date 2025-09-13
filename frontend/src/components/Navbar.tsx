import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { useNavContext } from "../context/NavContext";

const Navbar: React.FC = () => {
  const items = ["home", "about", "projects", "skills", "contact"];
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSession, setActiveSession } = useNavContext();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSession(visible.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((s) => observer.unobserve(s));
    };
  }, [setActiveSession]);

  return (
    <nav
      className={`navbar navbar-expand-sm fixed-top ${
        isScrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navCon"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navCon">
          <ul className="navbar-nav ms-auto">
            {items.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  className={`nav-link ${
                    activeSession === item ? "active" : ""
                  }`}
                  href={`#${item}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
