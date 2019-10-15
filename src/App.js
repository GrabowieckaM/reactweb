import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import Home from "./components/Home"
import LoginPage from "./components/LoginPage";
import RegistryPage from "./components/RegistryPage";
import {ScrollLink} from "react-scroll/modules";

class App extends React.Component{

    render() {

        return(
            <>

            <BrowserRouter>
                    <Link to={"/log"}>Zaloguj</Link>
                    <Link to={"/registry"}>Załóż konto</Link>
                <Link to={"/"}>Strona główna</Link>
                    <Route path={"/log"} component={LoginPage}/>
                    <Route path={"/registry"} exact component={RegistryPage}/>
                    <Route path={"/"} exact component={Home}/>
            </BrowserRouter>

                </>

        );
    }
}

export default App;