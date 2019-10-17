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

                    <div className='secnav'>
                        <BrowserRouter>

                            <Link to={'/'} >O co chodzi</Link>
                            <Link to={"/"}>O nas</Link>
                            <Link to={"/"}>Fundacje i organizacje</Link>
                            <Link to={"/"}>Kontakt</Link>
                            {/*<Route path={"/"} component={HomeThreeColumns}/>*/}
                            {/*<Route path={"/"} component={HomeAboutUs}/>*/}
                            {/*<Route path={"/"} exact component={HomeWHosHelping}/>*/}
                            {/*<Route path={"/"} exact component={HomeContact}/>*/}



                        </BrowserRouter>
                    </div>

                    <div className='desc'>
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce!</h1>

                    </div>
                    <div className='img1'>

                    </div>
                    <div className='btns'>
                        <BrowserRouter>
                            <Link path='/log'>Oddaj<br/> rzeczy</Link>
                            <Link path='/log'>Zorganizuj zbiórke</Link>
                            <Route path='/log' exact component={LoginPage}/>
                        </BrowserRouter>
                    </div>


                </div>

            </header>
        </>
    );

}

export default HomeHeader;