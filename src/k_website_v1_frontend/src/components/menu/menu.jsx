import React from "react";
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { MenuOption } from '../menuOption/menuOption.jsx';
import "./style.css";


export const Menu = ({ type }) => {

    const { t } = useTranslation();
    const data = t('home.appBar.menu');

    return (
        <React.Suspense fallback="...loading">
            <Grid className={ type === "plain" ? "plain-menu-screen" : "menu-screen"}>
                {
                    data.map((data) => {
                        return (
                            <Grid>
                                <MenuOption name={ data.name } link={ data.link } />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </React.Suspense>
    );
};
