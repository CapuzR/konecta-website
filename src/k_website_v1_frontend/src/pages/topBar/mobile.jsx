import React from "react";
import { Grid } from "@mui/material";
import { HamburgerMenu } from "../../components/hamburgerMenu/hamburgerMenu.jsx";
import { Button } from "../../components/button.jsx";
import { Line } from "../../components/line.jsx";
import { useTranslation } from 'react-i18next';


export const TopBar = () => {
    
    const { t } = useTranslation();
    const data = t('home.appBar.buttons');

    return (
        <Grid container justifyContent="center" spacing={0}>
            <Grid item container xs={12}>
                <Grid item container xs={3} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <img 
                            src="./konectaLogo.png"
                            alt="Logo"
                            style={{ width: "41%", height: "auto", margin: 0  }}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={6}>
                    <Grid item container xs={12} justifyContent="center" alignItems="center">
                        <HamburgerMenu />
                    </Grid>
                </Grid>
                <Grid item container xs={3} justifyContent="right">
                    <Grid item container xs={6} alignItems="center" justifyContent="right">
                        <Button text={data.pre.name} link={data.pre.link} target={data.pre.target} type="bordered" />
                    </Grid>
                </Grid>
            </Grid>
            <Line/>
        </Grid>
    );
};