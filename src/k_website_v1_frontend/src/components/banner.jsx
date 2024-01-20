import React from "react";
import { Grid } from "@mui/material";
import { Button } from "./button.jsx";
import { Typography } from "./typography.jsx";
import { useTranslation } from 'react-i18next';


export const Banner = () => {
    
    const { t } = useTranslation();
    const data = t('home.banner');

    return (
        <Grid container justifyContent="center" spacing={0} sx={{ padding: "11vw 7vw 7vw 7vw", height: "83vh" }}>
            <Grid item container xs={12} justifyContent="center" alignItems="center">
                <Typography text={data.title} size="small" color="primary" />
            </Grid>
            <Grid item container xs={12} justifyContent="center" alignItems="center">
                <Typography text={data.subtitle} size="huge" type="secondary" />
            </Grid>
            <Grid item container xs={10} justifyContent="center" alignItems="center" sx={{ textAlign: "center" }}>
                <Typography text={data.description} size="small" />
            </Grid>
            <Grid item container xs={12} justifyContent="space-around">
                <Grid item container xs={6} justifyContent="right">
                    <Button text={data.buttons.primary} type="primary" link="https://forms.gle/Pn4BZsphRUqcxkXD9"  />
                </Grid>
                <Grid item container xs={6} justifyContent="left">
                    <Button text={data.buttons.secondary} type="filled" link="https://x.com/konectadao" />
                </Grid>
            </Grid>
        </Grid>
    );
};