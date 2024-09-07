import React from "react";
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { MenuOption } from '../menuOption/menuOption.jsx';
import "./style.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


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
                                <MenuOption name={ data.name } link={ data.link } status={ data.status } target={ data.target } />
                                { data.name == "FAQ" && <OpenInNewIcon style={{ color: "#666", fontSize: "1rem", marginLeft: "-0.4rem" }} />}
                            </Grid>
                        )
                    })
                }
            </Grid>
        </React.Suspense>
    );
};
