import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const LandingPage: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // Three.js starfield
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040d12);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";
    currentMount.appendChild(renderer.domElement);

    // Stars
    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 5000;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const starMaterial = new THREE.PointsMaterial({
      color: 0xc6d870,
      size: 1.5,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Scroll effect
    const onScroll = () => {
      const scrollY = window.scrollY;
      camera.position.z = 500 - scrollY * 0.5;
    };
    window.addEventListener("scroll", onScroll);

    // Animate
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      window.removeEventListener("scroll", onScroll);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="landing-page" ref={mountRef}>
      <Navbar />
      <section id="home" className="hero-section">
        <Hero />
      </section>
      <section id="about" className="about-section">
        <About />
      </section>
      <section id="projects" className="projects-section">
        <Projects />
      </section>
      <section id="skills" className="skills-section">
        <Skills />
      </section>
      <section id="contact" className="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default LandingPage;
