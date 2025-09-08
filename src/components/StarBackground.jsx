import React, { useEffect, useRef, useState } from "react";

// NOTE: Previous implementation could create 1500-2500+ individual DOM nodes on large screens
// which slows initial page paint & theme transitions. This version:
// 1. Reduces star density (area / 6500) with an upper cap.
// 2. Debounces expensive regeneration on resize.
// 3. Keeps meteors lightweight.
// Further improvement (future): move to a <canvas> for near-zero layout cost.

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const resizeTimer = useRef(null);

  useEffect(() => {
    // initial generate
    generateStars();
    generateMeteors();
    // Debounced resize handler
    const handleResize = () => {
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(() => {
        generateStars();
        generateMeteors();
      }, 180); // small delay to avoid thrashing during window drag
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
    };
  }, []);

  const generateStars = () => {
    const area = window.innerWidth * window.innerHeight;
    // density divisor higher => fewer stars; clamp to a reasonable range
    const target = Math.min(600, Math.max(160, Math.floor(area / 6500)));
    const newStars = Array.from({ length: target }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.2 + 0.6, // smaller for less visual noise
      opacity: Math.random() * 0.45 + 0.35,
      animationDuration: Math.random() * 4 + 2,
    }));
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 3; // slightly fewer
    const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 22,
      size: Math.random() * 2 + 0.8,
      delay: Math.random() * 14,
      animationDuration: Math.random() * 3 + 3,
    }));
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.x + "%",
            top: star.y + "%",
            width: star.size + "px",
            height: star.size + "px",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            left: meteor.x + "%",
            top: meteor.y + "%",
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
