import React from "react";
import TypingAnimator from "react-typing-animator";
import "react-typing-animator/styles.css";

function TypingAnimation() {
  const textArray = [
    "Influencers",
    "इंफ्लुएंसर",
    "இன்ஃப்ளூயன்சர்",
    "ఇన్ఫ్లూయెన్సర్",
    "ઇનફ્લુએન્સર",
  ];

  // Custom style for larger cursor
  const customStyles = {
    cursor: {
      width: "4px", // Adjust width
      height: "30px", // Adjust height
      backgroundColor: "#6366F1", // Match color
    },
  };

  return (
    <TypingAnimator
      textArray={textArray}
      cursorColor="#6366F1"
      textColor="#6366F1"
      fontSize="inherit"
      typingSpeed={150}
      delaySpeed={1000}
      height="auto"
      backspace
      customStyles={customStyles}
    />
  );
}

export default TypingAnimation;
