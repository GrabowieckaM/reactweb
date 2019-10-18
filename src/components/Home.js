import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {ScrollLink} from 'react-scroll';

import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumn";
import Home4Steps from "./Home4steps";
import HomeContact from "./HomeContact";
import HomeAboutUs from "./HomeAboutUs";
import HomeWHosHelping from "./HomeWhosHelping";

function Home() {

    return(
        <div className='mojdiv'>
            <HomeHeader/>
            <HomeThreeColumns/>
            <Home4Steps/>
            <HomeAboutUs/>
            <HomeWHosHelping/>
            <HomeContact/>

        </div>

    );
    
}

export default Home;