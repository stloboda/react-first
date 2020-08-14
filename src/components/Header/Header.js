import React from "react";
import '../../App.css'
import classes from './Header.module.css'


const Header = () =>{
    return <header className={classes.header}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Maps</li>
        </ul>
    </header>
}
export default Header