import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from "./Home";

function Logout() {

    return(
        <div className='logoutcont'>
        <div className='logout'>
            <h1>Wylogowanie nastąpiło pomyślnie</h1>
            <div className='deco'>

            </div>
            <a href='/'>Strona główna</a>
        </div>
        </div>
    );

}


export default Logout;