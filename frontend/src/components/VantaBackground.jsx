import React, { useEffect, useRef } from 'react';

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;
    const initializeEffect = async () => {
      if (window.VANTA && !vantaEffect) {
        const VANTA = window.VANTA;
        vantaEffect = VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x4a1221,
        //   backgroundColor: 0xf0f18,
          showDots: false
        });
      }
    };

    initializeEffect();

    return () => {
      if (vantaEffect) {
        vantaEffect = null;
      }
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;
