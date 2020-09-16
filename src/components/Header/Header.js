import React from "react";
import '../../App.css'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.topBox}>
                <p>
                    (099)3274546 &#124; terve038@gmail.com
                </p>
            </div>
            <header className={classes.header}>
                <div className={classes.navLinks}>
                    <strong>
                        <ul>
                            <li>
                                <NavLink to="/MainPage" activeClassName={classes.active}> HOME </NavLink>
                            </li>
                            <li>
                                <NavLink to="/AboutPage"
                                         activeClassName={classes.active}> ABOUT </NavLink>
                            </li>
                            <li>
                                <NavLink to="/CatalogPage"
                                         activeClassName={classes.active}> CATALOG </NavLink>
                            </li>
                            <li>
                                <NavLink to="/MapPage"
                                         activeClassName={classes.active}>MAPS </NavLink>
                            </li>
                        </ul>
                    </strong>
                </div>
                <div className={classes.logo}>
                    <img className={classes.imgLogo}
                         src="https://dcassetcdn.com/design_img/3490880/152860/152860_19137850_3490880_bbd71693_image.jpg" alt=""/>
                </div>
            </header>
        </div>
    )
}
export default Header