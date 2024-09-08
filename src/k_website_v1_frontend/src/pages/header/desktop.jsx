import React from "react";
import { Grid } from "@mui/material";
import { Button } from "../../components/button.jsx";
import { Typography } from "../../components/typography.jsx";
import { useTranslation } from 'react-i18next';
import { BannerImage } from "../../components/bannerImage/bannerImage.jsx";


export const Banner = () => {
    
    const { t } = useTranslation();
    const data = t('home.banner');

    return (
        <>
        <Grid container justifyContent="center" spacing={0} sx={{ padding: "3vw 7vw 0vw 7vw", height: "43vh" }}>
            <Grid item container xs={12} justifyContent="center" alignItems="center">
                <Typography text={data.title} size="small" color="primary" />
            </Grid>
            <Grid item container xs={12} justifyContent="center" alignItems="center">
                <Typography text={data.subtitle} size="huge" type="secondary" />
            </Grid>
            <Grid item container xs={11} justifyContent="center" alignItems="center" sx={{ textAlign: "center" }}>
                <Typography text={data.description} size="medium" color="secondary"/>
            </Grid>
            <Grid item container xs={12} justifyContent="space-around">
                <Grid item container xs={6} justifyContent="right">
                    <Button text={data.buttons.primary.name} type="primary" link={data.buttons.primary.link} target={data.buttons.primary.target}  />
                </Grid>
                <Grid item container xs={6} justifyContent="left">
                    <Button text={data.buttons.secondary.name} type="filled" link={data.buttons.secondary.link} target={data.buttons.secondary.target} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent="space-around" style={{ width: "100%", marginTop: "110px", height: "100%" }}>
            <BannerImage />
        </Grid>
        </>
    );
};