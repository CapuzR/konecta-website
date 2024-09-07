import React from "react";
import { Grid } from "@mui/material";

export const Line = () => {
  return (
    <Grid item container xs={12} sx={{
        marginTop: "30px",
        height: "1.5px",
        width: "100%",
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 7.29%, rgba(255, 255, 255, 0.20) 39.45%, rgba(255, 255, 255, 0.00) 98.23%)"
    }}>
    </Grid>
  );
};