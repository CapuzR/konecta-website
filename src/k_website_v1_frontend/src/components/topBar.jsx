import React from "react";
import { Grid } from "@mui/material";
import { Menu } from "./menu/menu.jsx";
import { Button } from "./button.jsx";
import { Line } from "./line.jsx";
import { useTranslation } from 'react-i18next';


export const TopBar = () => {
    
    const { t } = useTranslation();
    const data = t('home.appBar.buttons');

    return (
        <Grid container justifyContent="center">
            <Grid item container xs={12}>
                <Grid item container xs={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} >
                        <img 
                            src="./konectaLogo.png"
                            alt="Logo"
                            style={{ width: "58%", height: "auto", margin: 0  }}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={7}>
                    <Grid item container xs={12} justifyContent="center" alignItems="center">
                        <Menu />
                    </Grid>
                </Grid>
                <Grid item container xs={3}>
                    {/* <Grid item container xs={6} alignItems="center">
                        <Button text={data.login} type="plain" />
                    </Grid>
                    <Grid item container xs={6} alignItems="center">
                        <Button text={data.signup} type="bordered" />
                    </Grid> */}
                    <Grid item container xs={6} alignItems="center">
                    </Grid>
                    <Grid item container xs={6} alignItems="center">
                        <Button text="Docs soon" type="bordered" link="#" target="top" />
                    </Grid>
                </Grid>
            </Grid>
            <Line/>
        </Grid>
    );
};