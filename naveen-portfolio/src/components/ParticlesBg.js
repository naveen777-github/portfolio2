import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // lightweight bundle
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // IMPORTANT (we control size with CSS)
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 200, density: { enable: true, area: 900 } },
          color: { value: "#7DD3FC" },
          links: {
            enable: true,
            color: "#38BDF8",
            distance: 100,
            opacity: 2,
            width: 0.5,
          },
          move: {
            enable: true,
            speed: 0.7,
            outModes: { default: "out" },
          },
          opacity: {
            value: 0.5,
          },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 2 },
          },
        },
      }}
    />
  );
}
