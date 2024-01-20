import React from "react";
import "./style.css";
import { Typography } from "../typography";

export const MenuOption = (props) => {
    
    const { name, link } = props;

    return (
        <>
            <div className="frame">
                <a href={link} style={{ textDecoration: "none" }} ><Typography text={name} size="small"/></a>
            </div>
        </>
    );
};