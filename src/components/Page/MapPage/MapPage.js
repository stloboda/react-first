import React from "react";
import classes from './MapPage.module.css'

const MapPage = () => {
    return (
        <div className={classes.App}>
            <div className={classes.mainText}>
                WHO WE ARE
            </div>
            <hr className={classes.firstHr}/>
            <div className={classes.aboutText}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat.
                </p>
            </div>
            <div className={classes.contactText}>
                WHERE WE ARE
            </div>
            <div className={classes.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1287.1159344597438!2d24.0602703!3d49.8193071!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1600265828343!5m2!1sru!2sua"></iframe>
            </div>
            <div className={classes.addressText}>
                OUR ADDRESS
            </div>
            <div className={classes.addressAbout}>
                <p>&#8226; Ukraine, Kharkov</p>
                <p>&#8226; Zelena 38 street</p>
                <p>&#8226; UA 621000</p>
            </div>
        </div>
    )
}

export default MapPage