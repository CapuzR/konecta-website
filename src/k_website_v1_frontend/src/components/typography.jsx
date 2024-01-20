import React from "react";

export const Typography = ({ text, size, color, type }) => {

  return (
    <p
        style={{
            color: color === "primary" ? "#2E68FF" : color === "secondary" ? "#807B87" : "#fff",
            fontFamily: type === "secondary" ? "Montserrat" : "Inter",
            fontSize: size === "tiny" ? "9px" :size === "small" ? "12px" : size === "medium" ? "18px" : size === "big" ? "28px" : "43px",
            fontStyle: "normal",
            fontWeight: "500px",
            lineHeight: "20px",
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