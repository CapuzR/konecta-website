import React from "react";
import { Grid } from "@mui/material";

export const Line = () => {
  return (
    <Grid item container xs={12} sx={{
        margin: "4vh",
        height: "1px",
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 17.29%, rgba(255, 255, 255, 0.20) 49.45%, rgba(255, 255, 255, 0.00) 88.23%)"
    }}>
    </Grid>
  );
};