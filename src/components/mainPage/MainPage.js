import React from "react";
import '/react-js/react-first/src/App.css'
import classes from './MainPage.module.css'
import CarouselMain from "./Carousel";

const MainPage = () => {
    return (
        <div className={classes.container}>
            <CarouselMain/>
        </div>
    )
}

export default MainPage