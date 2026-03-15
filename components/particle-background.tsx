"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // loads slim features
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      background: {
        color: "#000000"
      },
      particles: {
        number: {
          value: 80
        },
        color: {
          value: "#ffffff"
        },
        links: {
          enable: true,
          color: "#ffffff",
          distance: 150,
          opacity: 0.4
        },
        move: {
          enable: true,
          speed: 2
        },
        size: {
          value: { min: 1, max: 3 }
        },
        opacity: {
          value: 0.5
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          repulse: {
            distance: 100
          },
          push: {
            quantity: 4
          }
        }
      },
      detectRetina: true
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}