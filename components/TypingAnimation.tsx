import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypingAnimation() {
  return (
    <div style={{ display: "inline-block" }}>
      <Typewriter
        words={[
          "Influencer",
          "इंफ्लुएंसर",
          "இன்ஃப்ளூயன்சர்",
          "ఇన్ఫ్లూయెన్సర్",
          "ઇનફ્લુએન્સર",
        ]}
        loop={0} // Infinite loop
        cursor
        cursorStyle="|" // The default cursor character
        typeSpeed={150}
        deleteSpeed={50}
        delaySpeed={1000}
      />
      <style jsx>{`
        .typing-cursor {
          width: 5px; /* Adjust the width */
          height: 20px; /* Adjust height as needed */
          background-color: #6366f1; /* Match the cursor color */
          display: inline-block;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default TypingAnimation;
