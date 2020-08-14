import React from "react";
import '../../App.css'
import classes from './Footer.module.css'
import {ReactComponent as Instagram} from './instagram.svg';
import {ReactComponent as Facebook} from './facebook.svg';
import {ReactComponent as Whatsapp} from './whatsapp.svg';


const Footer = () => {
    return <footer className={classes.footer}>
        <div className={classes.discription}>
            <h4>Discription</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        </div>
        <div className={classes.my_about}>
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
        </div>
        <div className={classes.social}>
            <h4>Social</h4>
                <Instagram/>
                <Facebook/>
                <Whatsapp/>
        </div>
    </footer>
}

export default Footer