import React from 'react';
import ReactDOM from 'react-dom';
import { Link, animateScroll as scroll } from "react-scroll";

import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumn";
import Home4Steps from "./Home4steps";
import HomeContact from "./HomeContact";
import HomeAboutUs from "./HomeAboutUs";
import HomeWHosHelping from "./HomeWhosHelping";
import LoginPage from "./LoginPage";
import RegistryPage from "./RegistryPage";
import Logout from "./logout";

function Home() {

    return(<>

        <div className='content'>
            <nav className='nav'>
                <div className='navbar'>
                    <ul className='navul'>
                        <li>
                            <Link
                                activeClass="active"
                                to="hd"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                            >Start</Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="foursteps"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >O co chodzi?</Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="onas"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >O nas</Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="whcont"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Fundacje i organizacje</Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Kontakt</Link></li>
                    </ul>
                </div>
            </nav>
            <HomeHeader id="hd"/>
            <HomeThreeColumns id="three"/>
            <Home4Steps id="foursteps"/>
            <HomeAboutUs id="onas"/>
            <HomeWHosHelping id="whcont"/>
            <HomeContact id="contact"/>

        </div>
</>
    );
    
}

export default Home;