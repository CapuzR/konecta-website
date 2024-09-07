import React from "react";
import { Grid } from "@mui/material";
import { Menu } from "../menu/menu.jsx";
import { Button } from "../button.jsx";
import { Typography } from "../typography.jsx";
import { MediaCard } from "../card.jsx";
import { useTranslation } from 'react-i18next';
import Asset1 from '../../../assets/about_asset_1.svg';
import Asset2 from '../../../assets/about_asset_2.svg';
import Asset3 from '../../../assets/about_asset_3.svg';
import { Showcase } from "../showcase.jsx";
import { Line } from "../line.jsx";


export const About = () => {
    
    const { t } = useTranslation();
    const data = t('home.about');

    const options = [
        {
            title: data.cards[0].title,
            description: data.cards[0].description,
            image: Asset1
        },
        {
            title: data.cards[1].title,
            description: data.cards[1].description,
            image: Asset2
        },
        {
            title: data.cards[2].title,
            description: data.cards[2].description,
            image: Asset3
        }
    ]

    return (
        <Grid container justifyContent="center" spacing={4} sx={{ padding: "5vw 7vw vw 7vw" }}>
            <Grid item container xs={12} justifyContent="center" alignItems="center">
                <Typography text={data.title} size="small" color="primary" />
            </Grid>
            <Grid item container xs={12} justifyContent="center" alignItems="center">
                <Typography text={data.subtitle} size="XL" type="secondary" />
            </Grid>
            <Grid item container xs={10} justifyContent="center" alignItems="center" sx={{ textAlign: "center" }}>
                <Typography 
                text={data.description} 
                size="small"
                color="secondary"
                 />
            </Grid>
            <Grid item container xs={12} justifyContent="space-around" spacing={1}>
                {
                    options.map((option) => (
                        <Grid item container xs={4} justifyContent="center">
                            <MediaCard title={option.title} description={option.description} image={option.image} />
                        </Grid>
                    ))
                }
            </Grid>
            <Grid item container xs={12} justifyContent="space-around" spacing={1}>
                <Showcase />
            </Grid>
            <Grid item container xs={12} sx={{ margin: "150px 0px 150px 0px" }}>
                <Line />
            </Grid>
        </Grid>
    );
};