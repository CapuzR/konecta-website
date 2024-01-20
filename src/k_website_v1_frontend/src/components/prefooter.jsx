import React from "react";
import { Grid } from "@mui/material";
import { Button } from "./button.jsx";
import { Typography } from "./typography.jsx";
import { Line } from "./line.jsx";
import { useTranslation } from 'react-i18next';


export const Prefooter = () => {
    
    const { t } = useTranslation();
    const data = t('home.prefooter');

    return (
        <Grid container justifyContent="center" spacing={0} sx={{ padding: "0vw 7vw 4vw 7vw" }}>
            <Line />
            <Grid item xs={6} container spacing={2}>
                <Grid item container xs={12} justifyContent="left" alignItems="center">
                    <Typography text={data.title} size="small" color="primary" />
                </Grid>
                <Grid item container xs={12} justifyContent="left" alignItems="center">
                    <Typography text={data.subtitle} size="big" type="secondary" />
                </Grid>
                <Grid item container xs={12} justifyContent="left" alignItems="center">
                    <Typography text={data.description} size="small" />
                </Grid>
            </Grid>
            <Grid item container xs={6} justifyContent="center" alignItems="center">
                <Grid item container xs={6} justifyContent="right">
                    <Button text={data.buttons.primary} type="primary" link="https://forms.gle/Pn4BZsphRUqcxkXD9" />
                </Grid>
                <Grid item container xs={6} justifyContent="left">
                    <Button text={data.buttons.secondary} type="filled" link="https://x.com/konectadao" />
                </Grid>
            </Grid>
        </Grid>
    );
};