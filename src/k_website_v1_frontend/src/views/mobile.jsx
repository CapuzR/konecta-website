import * as React from "react";
import { Grid } from "@mui/material";
import Bg from "../../assets/background.jpg";
import { Typography } from "../components/typography.jsx";
import Logo from "../../assets/blueLogo.png";

export const Mobile = () => { 
  return (
      <Grid container spacing={0} sx={{ width: "100%", height: "100vh" }} justifyContent="center" alignItems="center">
        <Grid item container xs={12}>
            <img src={Logo} className="rotating-logo"/>
        </Grid>
        <Grid item container xs={12} spacing={2}>
            <Grid item container xs={12} justifyContent="center">
              <Typography  text="mobile" size="medium"/>
            </Grid>
            <Grid item container xs={12} justifyContent="center">
              <Typography  text="SOON"/>
            </Grid>
        </Grid>
      </Grid>
  );
};