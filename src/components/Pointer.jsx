import React, { useEffect } from "react";

const Pointer = () => {
  useEffect(() => {
    const pointer = document.createElement("div");
    pointer.classList.add("custom-pointer");
    document.body.appendChild(pointer);

    let tailElements = [];
    const maxTailLength = 20; // Max number of tail particles
    let mouseX = 0;
    let mouseY = 0;

    // Function to generate the comet trail (particles)
    const generateTail = () => {
      if (tailElements.length >= maxTailLength) {
        // Remove the oldest tail element to keep the array length in check
        document.body.removeChild(tailElements.shift());
      }

      // Create a new tail particle
      const tail = document.createElement("div");
      tail.classList.add("comet-tail");
      document.body.appendChild(tail);
      tailElements.push(tail);
      
      // Position the new tail particle at the cursor's location
      tail.style.top = `${mouseY}px`;
      tail.style.left = `${mouseX}px`;

      // Remove the tail particle after animation completes (1 second)
      setTimeout(() => {
        document.body.removeChild(tail);
        tailElements = tailElements.filter((el) => el !== tail);
      }, 1000);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move the main cursor (comet head)
      pointer.style.top = `${mouseY}px`;
      pointer.style.left = `${mouseX}px`;

      // Generate a new comet tail particle
      generateTail();
    };

    // Attach event listener globally
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(pointer);
      // Clean up tail elements on component unmount
      tailElements.forEach((tail) => document.body.removeChild(tail));
    };
  }, []);

  return null;
};

export default Pointer;
