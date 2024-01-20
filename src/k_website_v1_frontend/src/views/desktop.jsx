import * as React from "react";
import { Grid } from "@mui/material";
import { TopBar } from "../components/topBar.jsx";
import { Banner } from "../components/banner.jsx";
import { Showcase } from "../components/showcase.jsx";
import { About } from "../components/about.jsx";
import { Prefooter } from "../components/prefooter.jsx";
import { Footer } from "../components/footer.jsx";
import Bg from "../../assets/background.jpg";

export const Desktop = () => { 

  return (
      <Grid container sx={{ padding: "3% 8% 0 8%", backgroundImage: Bg }}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12} id="webapp">
          <Showcase />
        </Grid>
        <Grid item xs={12} id="about">
          <About />
        </Grid>
        <Grid item xs={12}>
          <Prefooter/>
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
  );
};