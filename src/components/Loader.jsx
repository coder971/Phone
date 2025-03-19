import { Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";

const Loader = () => {
  // Track loading progress percentage
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate a loading progress bar using a timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Stop updating once it reaches 100%
          return 100;
        }
        return prev + 1; // Increment progress smoothly
      });
    }, 30); // Adjust timing for a smoother effect

    return () => clearInterval(interval); // Cleanup function to avoid memory leaks
  }, []);

  return (
    <Html fullscreen>
      {/* Wrapper to center everything on the screen */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="flex flex-col items-center">
          {/* Circular progress indicator */}
          <div className="relative w-16 h-16 mb-8">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Background circle (static, light gray) */}
              <circle cx="50" cy="50" r="40" stroke="#e0e0e0" strokeWidth="4" fill="none" />
              
              {/* Foreground circle (animated, black) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#000000"
                strokeWidth="4"
                fill="none"
                strokeDasharray="251" // Full circumference of the circle
                strokeDashoffset={251 - (251 * progress) / 100} // Decrease stroke offset based on progress
                transform="rotate(-90 50 50)" // Rotate so it starts from the top
              />
            </svg>
          </div>

          {/* Display loading text dynamically based on progress */}
          <p className="font-sans text-sm text-gray-500 tracking-wide">
            {progress === 100 ? "Ready" : "Loading..."}
          </p>
        </div>
      </div>
    </Html>
  );
};

export default Loader;