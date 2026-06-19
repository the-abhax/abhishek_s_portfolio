import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import HeroScene from "./HeroScene";
import DesktopOS from "./DesktopOS";

function Hero() {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };


    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);


  }, []);

  return (
    <> <section className="hero" id="hero">


      <div className="hero-left">

        <span className="intro">
          AI • ML • FULL STACK DEVELOPER
        </span>

        <h1>
          ABHISHEK
          <br />
          <span className="hero-last">
            S
          </span>
        </h1>

        <h2>
          Building Intelligent Digital Experiences
        </h2>

        <p>
          I build AI-powered applications,
          intelligent software systems,
          and modern web experiences that
          combine machine learning with
          real-world problem solving.
        </p>

        <div className="hero-buttons">

          <button
            className="btn-primary"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            View Projects
          </button>

          <a
            href="./abhishek_s_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Download CV ↗
          </a>

        </div>

        <p className="monitor-hint">
          <span className="hint-arrow">
            ↗
          </span>
          {" "}
          Click the monitor to explore
        </p>

      </div>

      <div className="hero-right">

        <Canvas
          shadows
          camera={{
            position: [
              0,
              0,
              isMobile ? 12 : 15,
            ],
            fov: isMobile ? 65 : 50,
          }}
        >

          <ambientLight intensity={1.2} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
            castShadow
          />

          <pointLight
            position={[0, 3, 2]}
            color="#00d4ff"
            intensity={25}
          />

          <HeroScene
            onMonitorClick={() =>
              setIsDesktopOpen(true)
            }
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
          />

        </Canvas>

      </div>

    </section>

      <DesktopOS
        isOpen={isDesktopOpen}
        onClose={() =>
          setIsDesktopOpen(false)
        }
      />
    </>

  );
}

export default Hero;
