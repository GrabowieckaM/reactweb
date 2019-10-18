import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";


import LoginPage from "./components/LoginPage";
import RegistryPage from "./components/RegistryPage";
import {ScrollLink,ScrollElement} from 'react-scroll';
import Home from "./components/Home";
import HomeContact from "./components/HomeContact";
import HomeAboutUs from "./components/HomeAboutUs";
import HomeWHosHelping from "./components/HomeWhosHelping";
import HomeThreeColumns from "./components/HomeThreeColumn";
import HomeHeader from "./components/HomeHeader";
import Logout from "./components/logout";

class App extends React.Component{

    render() {

        return(
            <>
            <div className='frstnav'>

            <BrowserRouter>
                    <Link to={"/log"}>Zaloguj</Link>
                    <Link to={"/registry"}>Załóż konto</Link>
                    <Link to={"/logout"}>Wyloguj</Link>
                    <Link to={"/"}>Strona główna</Link>
                    <Route path={"/log"} component={LoginPage}/>
                    <Route path={"/registry"} exact component={RegistryPage}/>
                     <Route path={"/logout"} exact component={Logout}/>
                     <Route path={"/"} exact component={Home}/>

            </BrowserRouter>
            </div>



</>
        );
    }
}

export default App;