import React from "react";
import { Grid } from "@mui/material";
import { Menu } from "./menu/menu.jsx";
import { Button } from "./button.jsx";
import { Typography } from "./typography.jsx";
import XIcon from '@mui/icons-material/X';
import { Line } from "./line.jsx";


export const Footer = () => {
    return (
        <Grid container justifyContent="center" sx={{ marginBottom: "33px" }}>
            <Line />
            <Grid item container xs={12} sx={{ marginTop: "33px" }}>
                <Grid item container xs={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} >
                        <Typography text="Konecta ® 2024" size="tiny" />
                    </Grid>
                </Grid>
                <Grid item container xs={7}>
                    <Grid item container xs={12} justifyContent="center" alignItems="center">
                        <Menu type="plain"/>
                    </Grid>
                </Grid>
                <Grid item container xs={3}>
                    <Grid item container xs={6} alignItems="center" justifyContent="right">
                        <a href="https://x.com/konectadao" target="_blank" style={{ textDecoration: "none" }}>
                            <XIcon sx={{ color: "#fff", fontSize: "20px" }}/>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};