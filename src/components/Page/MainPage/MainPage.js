import React from "react";
import classes from './MainPage.module.css'
import {NavLink} from "react-router-dom";


const MainPage = () => {
    return (<div className={classes.container}>
            {/*<div className={classes.buttonNeon}>*/}
            {/*    <NavLink to="/MapPage"*/}
            {/*             className={classes.neonLink}>*/}
            {/*        <span></span>*/}
            {/*        <span></span>*/}
            {/*        <span></span>*/}
            {/*        <span></span>*/}
            {/*        You button*/}
            {/*    </NavLink>*/}
            {/*</div>*/}
            <div className={classes.firtsText}>
                <h1>
                    Everything for the garden for any season
                </h1>
            </div>
            <div className={classes.linkCatalog}>
                <strong>
                    <NavLink to="/CatalogPage" ClassName={classes.mainCatalog}>View product catalog </NavLink>
                </strong>
            </div>
            <hr className={classes.firstHr}/>
            <div className={classes.wallpaper}>
                <img src="https://www.gobalboa.com/media/8093.jpg" alt=""/>
            </div>
            <hr className={classes.secondHr}/>
        </div>
    )
}

export default MainPage