// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export const CursorEffect = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVariant, setCursorVariant] = useState("default");

//   useEffect(() => {
//     const mouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 8,
//       y: mousePosition.y - 8,
//       backgroundColor: "#ff7e5f",
//     },
//     hover: {
//       height: 24,
//       width: 24,
//       x: mousePosition.x - 12,
//       y: mousePosition.y - 12,
//       backgroundColor: "#feb47b",
//     },
//   };

//   useEffect(() => {
//     const handleMouseOver = () => setCursorVariant("hover");
//     const handleMouseOut = () => setCursorVariant("default");

//     document.querySelectorAll("a, button").forEach((el) => {
//       el.addEventListener("mouseover", handleMouseOver);
//       el.addEventListener("mouseout", handleMouseOut);
//     });

//     return () => {
//       document.querySelectorAll("a, button").forEach((el) => {
//         el.removeEventListener("mouseover", handleMouseOver);
//         el.removeEventListener("mouseout", handleMouseOut);
//       });
//     };
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
//       variants={variants}
//       animate={cursorVariant}
//       transition={{
//         type: "spring",
//         stiffness: 500,
//         damping: 28,
//       }}
//     />
//   );
// };
