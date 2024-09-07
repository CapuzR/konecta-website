import * as React from "react";
import { Grid } from "@mui/material";
import { TopBar } from "../components/topBar.jsx";
import { Banner } from "../components/banner/banner.jsx";
import { About } from "../components/about/about.jsx";
import { Prefooter } from "../components/prefooter.jsx";
import { Footer } from "../components/footer.jsx";
import Bg from "../../assets/background.jpg";
import { PreRegistration } from "../components/preRegistration/preRegistration.jsx";
import { Team } from "../components/team/team.jsx";

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