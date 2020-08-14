import React from 'react';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import MapPage from "./components/MapPage/MapPage";
import './App.css';
import './fonts/fonts.css'

const App = () => {
    return (
        <div className="wrapper">
        <Header />
        <MainPage />
        <Footer />
        <MapPage />
        </div>
    );
}

export default App;
