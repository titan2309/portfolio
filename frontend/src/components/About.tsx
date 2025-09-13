import React, { useEffect, useRef } from "react";
import "../css/About.css";
import * as THREE from "three";

const About: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Wireframe globe
    const geometry = new THREE.SphereGeometry(20, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xc6d870,
      wireframe: true,
      opacity: 0.5,
      transparent: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="div-about container">
      <div className="row about-row">
        <div className="col-12 text-center mb-4">
          <h1 className="about-heading display-4">About Me</h1>
        </div>

        <div className="col-12 col-md-6">
          <p className="lead about-lead-text">
            Hey, I’m <span className="about-strong-text">Hardik Rathore</span> —
            a Full-Stack Developer who turns{" "}
            <span className="about-strong-text">coffee into code </span>
            and random ideas into apps that actually work (most of the time). I
            live in the world of <span className="about-strong-text">
              Java
            </span>{" "}
            and the <span className="about-strong-text">MERN stack</span>,
            building things that are secure, fast, and hopefully a little fun to
            use.
          </p>
          <p className="lead about-lead-text">
            I’ve shipped projects ranging from{" "}
            <span className="about-strong-text">E-Commerce platforms</span> that
            keep carts full, to{" "}
            <span className="about-strong-text">productivity apps</span> that
            (ironically) I use to procrastinate. I thrive at the crossroads of{" "}
            <span className="about-strong-text">user experience</span>,
            <span className="about-strong-text"> security</span>, and
            <span className="about-strong-text"> scalability</span>.
          </p>
          <p className="lead about-lead-text">
            Right now, I’m aiming to grow into a{" "}
            <span className="about-strong-text">Cloud Expert</span> and{" "}
            <span className="about-strong-text">Engineer</span> who believes
            that good software shouldn’t just work — it should{" "}
            <span className="about-strong-text">Delight</span>. (And if it
            breaks, at least break in style.)
          </p>
          <p className="lead about-lead-text">
            Outside of code, you’ll probably find me{" "}
            <span className="about-strong-text">gaming</span>,
            <span className="about-strong-text"> lifting weights</span>, or
            plotting how to debug life itself. 🚀
          </p>
        </div>

        <div className="col-12 col-md-6 ">
          <div className="globe" ref={mountRef} />
        </div>
      </div>
    </div>
  );
};

export default About;
