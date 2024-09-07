import React from "react";
import "./style.css";
import { Typography } from "../typography";

export const MenuOption = (props) => {
    
    const { name, link, status, target } = props;

    return (
        <>
            <div className="frame">
                <a href={link} style={{ textDecoration: "none", padding: 0 }} target={target} >
                    <Typography text={name} size="small" color={ status === "active" ? "white" : "secondary" }/>
                </a>
            </div>
        </>
    );
};