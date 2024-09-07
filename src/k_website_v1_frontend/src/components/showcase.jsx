import React from "react";
import { Grid } from "@mui/material";
import videoPrev from "../../assets/konecta_cal_prev.png";
import Video from "../../assets/konecta_webapp.mp4";
import { Typography } from "./typography.jsx";
import { useTranslation } from 'react-i18next';


export const Showcase = () => {
    
    const { t } = useTranslation();
    const data = t('home.showcase');

    return (
        <Grid container sx={{ margin: 0, padding: 0 }}>
            <Grid item container xs={12} justifyContent="center" alignItems="center" sx={{ paddingTop: 5 }}>
                <video width="100%" height="100%"  poster={videoPrev} controls style={{ zIndex: 0, margin: "10 0 0 0", borderRadius: "31.951px", border: "3px solid var(--borde-cobre, #2E68FF)", boxShadow: "0px 9.704px 14.798px 0px rgba(0, 0, 0, 0.50)", backgroundColor: "black", width: "70%"}} >
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Grid>
        </Grid>
    );
};