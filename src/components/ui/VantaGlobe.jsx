// components/VantaGlobe.jsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const VantaGlobe = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Dynamically load the globe script from CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";
    script.async = true;

    script.onload = () => {
      if (!vantaEffect && window.VANTA && window.VANTA.GLOBE) {
        const effect = window.VANTA.GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff3f81,
          backgroundColor: 0x000000,
        });
        setVantaEffect(effect);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen fixed top-0 left-0 z-[-1] pointer-events-none opacity-50"
    ></div>
  );
};

export default VantaGlobe;
