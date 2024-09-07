import React from "react";

export const Typography = ({ text, size, color, type }) => {

  return (
    <p
        style={{
            color: color === "primary" ? "#2E68FF" : color === "secondary" ? "#807B87" : "#fff",
            fontFamily: type === "secondary" ? "Montserrat" : "Inter",
            fontSize: size === "tiny" ? "clamp(0.2rem, 0.5vw, 1.5rem)" : size === "small" ? "clamp(0.4rem, 0.8vw, 2rem)" : size === "medium" ? "clamp(0.4rem, 1.3vw, 4rem)" : size === "big" ? "clamp(0.75rem, 2vw, 6rem)" : size === "XL" ? "clamp(1.5rem, 3vw, 12rem)"  : "clamp(1.5rem, 4vw, 12rem)",
            fontStyle: "normal",
            fontWeight: "500px",
            lineHeight: "25px",
            letterSpacing: "-0.14px",
            background: "var(--Landing-page-White, linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.67) 203.57%))",
            backgroundClip: "text",
            margin: 0
        }}
    >
        {text}
    </p>
  );
};