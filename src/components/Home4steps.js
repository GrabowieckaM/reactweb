import React from 'react';
import {Link} from "react-scroll/modules";
import LoginPage from "./LoginPage";
import {BrowserRouter,Route} from "react-router-dom";

function Home4Steps() {

    return(
        <div className="foursteps">
            <div className="step1">
            <h1>Wystarczą 4 proste kroki</h1>
                <div className='deco'>

                </div>
            </div>
            <div className="step2">
                <div className="cont">
                    <div className="part" id='p0'>
                        <div className="svg">

                        </div>
                        <h1>Wybierz rzeczy</h1>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="part" id='p1'>
                        <div className="svg">

                        </div>
                        <h1>Spakuj je</h1>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="part" id='p2'>
                        <div className="svg">

                        </div>
                        <h1>Zdecyduj komu<br/>chcesz pomóc</h1>
                        <p>Wybierz zaufane miejsce</p>
                    </div>
                    <div className="part" id='p3'>
                        <div className="svg">

                        </div>
                        <h1>Zamów kuriera</h1>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className="step3">
                <div className='btns'>

                        <a href='/log'>Oddaj<br/> rzeczy</a>


                </div>
            </div>

        </div>
    );

}

export default Home4Steps;