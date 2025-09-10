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

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040d12);

    // Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.z = 200;

    // Renderer
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
    const starGeometryAttribute = new THREE.BufferAttribute(positions, 3);
    starGeometry.setAttribute("position", starGeometryAttribute);
    const starMaterial = new THREE.PointsMaterial({
      color: 0x93b1a6,
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

    // Cleanup
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
      <section className="hero-section" id="home">
        <Hero />
      </section>
      <section className="about-section" id="about">
        <About />
      </section>
      <section className="projects-section" id="projects">
        <Projects />
      </section>
      <section className="skills-section" id="skills">
        <Skills />
      </section>
      <section className="contact-section" id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default LandingPage;
