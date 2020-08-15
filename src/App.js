import React from 'react';
import './App.css';
import './fonts/fonts.css'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import MainPage from "./components/Page/MainPage/MainPage";
import MapPage from "./components/Page/MapPage/MapPage";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="wrapper-content">
                    <Route path='/MainPage' component={MainPage}/>
                    <Route path='/MapPage' component={MapPage}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
