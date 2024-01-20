import * as React from "react";
import { render } from "react-dom";
import "./index.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import './i18n.js';
import { Desktop } from "./views/desktop.jsx";
import { Mobile } from "./views/mobile.jsx";

const Konecta = () => { 
  const isMobile = useMediaQuery('(max-width:1090px)');

  return (
    <React.Suspense fallback="...loading">
      {
        isMobile ? (
          <Mobile />
        ) :
        (
          <Desktop />
        )
      }
    </React.Suspense>
  );
};

render(<Konecta />, document.getElementById("root"));