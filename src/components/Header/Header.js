import React from "react";
import '../../App.css'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return <header className={classes.header}>
        <ul>
            <li>
                <NavLink to="/MainPage" activeClassName={classes.active}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/AboutPage" activeClassName={classes.active}>About</NavLink>
            </li>
            <li>
                <NavLink to="/CatalogPage" activeClassName={classes.active}>Catalog</NavLink>
            </li>
            <li>
                <NavLink to="/MapPage" activeClassName={classes.active}>Maps</NavLink>
            </li>
        </ul>
    </header>
}
export default Header