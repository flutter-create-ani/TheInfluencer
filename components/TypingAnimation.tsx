import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypingAnimation() {
  const textArray = [
    "Influencers",
    "इंफ्लुएंसर",
    "இன்ஃப்ளூயன்சர்",
    "ఇన్ఫ్లూయెన్సర్",
    "ઇનફ્લુએન્સર",
  ];

  return (
    <span className="text-[#6366F1]">
      <Typewriter
        words={textArray}
        loop={0} // Infinite loop
        typeSpeed={200}
        deleteSpeed={100}
        delaySpeed={1000}
        cursor
        cursorStyle="|"
      />
    </span>
  );
}

export default TypingAnimation;
