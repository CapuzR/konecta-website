import React from "react";
import { Typography } from "./typography.jsx";

export const Button = ({ text, type, link, target }) => {
  return (
    <>
    {
      type === "bordered" ?
        <a
          style={{
            borderRadius: "8px", 
            border: "1px solid var(--Landing-page-Linear, #2E68FF)", 
            background: "rgba(167, 180, 205, 0.05)",
            display: "flex",
            height: "48px",
            padding: "12px 36px",
            justifyContent: "center",
            alignItems: "center",
            "gap": "8px",
            padding: "0 20px 0 20px",
            textDecoration: "none"
          }}
          href={link}
          target= { target === "top" ? "_top" : "_blank" }
        >
          <Typography text={text} size="small" />
        </a>
      : type === "primary" ?
        <a
          style={{
            borderRadius: "8px", 
            background: "var(--Landing-page-Linear, linear-gradient(193deg, #2E68FF 9.26%, #6691FF 85.23%))",
            border: "none",
            display: "flex",
            height: "48px",
            padding: "12px 36px",
            justifyContent: "center",
            alignItems: "center",
            "gap": "8px",
            padding: "0 20px 0 20px",
            textDecoration: "none"
          }}
          href={link}
          target= { target === "top" ? "_top" : "_blank" }
        >
          <Typography text={text} size="small" />
        </a>
      : type === "secondary" ?
        <a
          style={{
            borderRadius: "8px", 
            border: "1px solid var(--Landing-page-Linear, #2E68FF)", 
            background: "rgba(167, 180, 205, 0.05)",
            display: "flex",
            height: "48px",
            padding: "12px 36px",
            justifyContent: "center",
            alignItems: "center",
            "gap": "8px",
            padding: "0 20px 0 20px",
            textDecoration: "none"
          }}
          href={link}
          target= { target === "top" ? "_top" : "_blank" }
        >
          <Typography text={text} size="small" />
        </a>
      :
        <a
          style={{
            border: "none",
            background: "transparent",
            display: "flex",
            height: "48px",
            padding: "12px 36px",
            justifyContent: "center",
            alignItems: "center",
            "gap": "8px",
            padding: "0 20px 0 20px",
            textDecoration: "none"
          }}
          href={link}
          target= { target === "top" ? "_top" : "_blank" }
        >
          <Typography text={text} size="small" />
        </a>
    }
    </>
  );
};