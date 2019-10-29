import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {ScrollLink,ScrollElement,Link} from 'react-scroll';
import Home from "./Home";
import HomeContact from "./HomeContact";
import HomeAboutUs from "./HomeAboutUs";
import HomeWHosHelping from "./HomeWhosHelping";
import HomeThreeColumns from "./HomeThreeColumn";
import LoginPage from "./LoginPage";

function HomeHeader() {

    return(
        <>
            <header id='hd'>
                <div className='headerimg'>

                </div>
                <div className='info'>

                    <div className='desc'>
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce!</h1>

                    </div>
                    <div className='img1'>

                    </div>
                    <div className='btns'>

                            <a href='/log'>Oddaj<br/> rzeczy</a>
                            <a href='/log'>Zorganizuj zbiórke</a>


                    </div>


                </div>

            </header>
        </>
    );

}

export default HomeHeader;