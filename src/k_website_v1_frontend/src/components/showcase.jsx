import React from "react";
import { Grid } from "@mui/material";
import videoPrev from "../../assets/konecta_cal_prev.png";
import Video from "../../assets/konecta_webapp.mp4";
import { Typography } from "./typography.jsx";


export const Showcase = () => {
    return (
        <Grid container>
            <Grid item container xs={12} justifyContent="center" alignItems="center" sx={{ margin:0, padding:0, paddingTop: 10 }}>
                <Typography text="Konecta Web App" size="medium" color="secondary" type="primary" />
            </Grid>
            <Grid item container xs={12} justifyContent="center" alignItems="top" sx={{ paddingTop: 5 }}>
                <video width="80%" height="75%"  poster={videoPrev} controls style={{ zIndex: 0, margin: "10 0 0 10", borderRadius: "31.951px", border: "3px solid var(--borde-cobre, #2E68FF)", boxShadow: "0px 9.704px 14.798px 0px rgba(0, 0, 0, 0.50)", backgroundColor: "black"}} >
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Grid>
        </Grid>
    );
};