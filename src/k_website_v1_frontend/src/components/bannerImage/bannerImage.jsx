import React from 'react';
import { Grid } from '@mui/material';
import "./style.css";

export const BannerImage = () => {
    return (
        <Grid class="image-container" item xs={12} style={{ height: "80%" }}>
            <img style={{ display:"block", margin: 0, minWidth: "100%", minHeight: "100%" }} src="/KCal.png" alt="Banner Image" />
        </Grid>
    );
};