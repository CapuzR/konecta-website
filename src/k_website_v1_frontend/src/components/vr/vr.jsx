import React, { useState, useEffect } from "react";
import "./vr.css";

// SVG imports (assuming they are in your project)
import Svg1 from "../../../assets/vr/vr1.svg";
import Svg2 from "../../../assets/vr/vr2.svg";
import Svg3 from "../../../assets/vr/vr3.svg";
import Svg4 from "../../../assets/vr/vr4.svg";
import Svg5 from "../../../assets/vr/vr5.svg";
import Svg6 from "../../../assets/vr/vr6.svg";
import Svg7 from "../../../assets/vr/vr7.svg";
import Svg8 from "../../../assets/vr/vr8.svg";

const svgs = [Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8]; // Array of SVGs

export const Vr = (props) => {
  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const className = props.class;
  // const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // setFade(false); // Trigger fade out
      setTimeout(() => {
        setCurrentSvgIndex((prevIndex) => (prevIndex + 1) % svgs.length); // Switch to next SVG
        // setFade(true); // Trigger fade in after switching
      }, 500); // Time for fade-out (should match CSS transition)
    }, 1000); // Time between switching SVGs

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={`svg-container`}>
      <img src={svgs[currentSvgIndex]} alt="Floating SVG" className={className} />
    </div>
  );
};
