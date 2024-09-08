import React from 'react';
import { Grid } from "@mui/material";
import { Line } from '../../components/line';
import { Typography } from '../../components/typography';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/button';
import XIcon from '@mui/icons-material/X';

export const PreRegistration = () => {
    
    const { t } = useTranslation();
    const data = t('home.preRegistration');

    return (
        <>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={3} justifyContent="flex-start">
                <img style={{ marginLeft:10 }} src="/Kami.svg" alt="Kami" />
            </Grid>
            <Grid item container spacing={3} xs={9} alignItems="center">
                <Grid item container spacing={5} xs={12} alignItems="center">
                    <Grid item container xs={12} justifyContent="flex-start">
                        <Typography text={data.title} size="small" color="primary" />
                    </Grid>
                    <Grid item container xs={12} justifyContent="flex-start">
                        <Typography text={data.subtitle} size="huge" type="secondary" />
                    </Grid>
                    <Grid item container xs={12} justifyContent="flex-start">
                        <Typography text={data.description} size="medium" color="secondary"/>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button text={data.buttons.primary} type="primary" link="https://pre.konecta.one"  />
                </Grid>
                <Grid item>
                    <Button text={data.buttons.secondary} type="secondary" link="https://chatgpt.com/g/g-S0vONPiGL-kami"  />
                </Grid>
                <Grid item container xs={6} alignItems="center" justifyContent="left">
                    <a href="https://x.com/kami_kta" target="_blank" style={{ textDecoration: "none" }}>
                        <XIcon sx={{ color: "#fff", fontSize: "20px" }}/>
                    </a>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container xs={12} sx={{ margin: "150px 0px 150px 0px" }}>
            <Line />
        </Grid>
        </>
    );
};