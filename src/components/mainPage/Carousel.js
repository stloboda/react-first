import React from "react";
import classes from './Carousel.module.css'
import {Carousel} from 'react-bootstrap'


const CarouselMain = () => {
        return (
            <div className={classes.App}>
                <div className={classes.container}>
                    {/*<Carousel>*/}
                    {/*    <Carousel.Item>*/}
                    {/*        <img*/}
                    {/*            className="d-block w-100"*/}
                    {/*            src="https://images2.alphacoders.com/101/1012090.jpg"*/}
                    {/*            alt="First slide"*/}
                    {/*        />*/}
                    {/*        <Carousel.Caption>*/}
                    {/*            <h3>First slide label</h3>*/}
                    {/*            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    {/*        </Carousel.Caption>*/}
                    {/*    </Carousel.Item>*/}
                    {/*    <Carousel.Item>*/}
                    {/*        <img*/}
                    {/*            className="d-block w-100"*/}
                    {/*            src="https://images2.alphacoders.com/101/1012090.jpg"*/}
                    {/*            alt="Third slide"*/}
                    {/*        />*/}
                    {/*        <Carousel.Caption>*/}
                    {/*            <h3>Second slide label</h3>*/}
                    {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                    {/*        </Carousel.Caption>*/}
                    {/*    </Carousel.Item>*/}
                    {/*    <Carousel.Item>*/}
                    {/*        <img*/}
                    {/*            className="d-block w-100"*/}
                    {/*            src="https://images2.alphacoders.com/101/1012090.jpg"*/}
                    {/*            alt="Third slide"*/}
                    {/*        />*/}
                    {/*        <Carousel.Caption>*/}
                    {/*            <h3>Third slide label</h3>*/}
                    {/*            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                    {/*        </Carousel.Caption>*/}
                    {/*    </Carousel.Item>*/}
                    {/*</Carousel>*/}

                    <div className={classes.buttonNeon}>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span> You button
                        </a>
                    </div>
                </div>
            </div>
        )
}

export default CarouselMain