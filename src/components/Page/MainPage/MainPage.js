import React from "react";
import classes from './MainPage.module.css'
import {NavLink} from "react-router-dom";


const MainPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.buttonNeon}>
                <NavLink to="/MapPage" className={classes.neonLink}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>You button
                </NavLink>
            </div>
        </div>
    )
}

export default MainPage