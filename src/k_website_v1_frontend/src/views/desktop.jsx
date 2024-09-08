import * as React from "react";
import { Grid } from "@mui/material";
import { TopBar } from "../pages/topBar/desktop.jsx";
import { Banner } from "../pages/header/desktop.jsx";
import { About } from "../pages/about/desktop.jsx";
import { Prefooter } from "../pages/preFooter/desktop.jsx";
import { Footer } from "../pages/footer/desktop.jsx";
import Bg from "../../assets/background.jpg";
import { PreRegistration } from "../pages/preRegistration/desktop.jsx";
import { Team } from "../pages/team/desktop.jsx";

export const Desktop = () => {

  return (
    <>
      <Grid container sx={{ padding: "2% 13% 0 13%", backgroundImage: Bg }}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12} id="preRegistration" style={{ zIndex: 1 }}>
          <PreRegistration />
        </Grid>
        <Grid item xs={12} id="about" style={{ zIndex: 1 }}>
          <About />
        </Grid>
        <Grid item xs={12} id="team" style={{ zIndex: 1 }}>
          <Team />
        </Grid>
        <Grid item xs={12} style={{ zIndex: 1 }}>
          <Prefooter/>
        </Grid>
        <Grid item xs={12} style={{ zIndex: 1 }}>
          <Footer/>
        </Grid>
      </Grid>
    </>
  );
};