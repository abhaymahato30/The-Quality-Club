import React, { useEffect } from "react";

const Pointer = () => {
  useEffect(() => {
    // Create and append custom pointer
    const pointer = document.createElement("div");
    pointer.classList.add("custom-pointer");
    document.body.appendChild(pointer);

    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Handle mousemove event to track pointer
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Use requestAnimationFrame to ensure smooth movement
      requestAnimationFrame(() => {
        pointer.style.top = `${mouseY}px`;
        pointer.style.left = `${mouseX}px`;
      });
    };

    // Attach the mousemove event globally
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup when component is unmounted
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(pointer);
    };
  }, []);

  return null;
};

export default Pointer;
