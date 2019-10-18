import React from 'react';
import ReactDOM from 'react-dom';

class LoginPage extends React.Component{

    constructor(){
        super();
        this.state={
            mailState:'',
            psswdState:''
        }
    }

    render() {
        return(
            <div className='logincont'>
                <div className='login'>
                    <h1>Zaloguj się</h1>
                    <div className='deco'>

                    </div>
                    <div className='logform'>
                        <form>
                            <label>Email<br/>
                                <input type='email' maxLength='20'/>
                            </label>
                            <label>Hasło<br/>
                                <input type='password' maxLength='10'/>
                            </label>
                        </form>
                    </div>
                    <div className='pages'>
                        <a href='/registry'>Załóż konto</a>
                        <a href='/log'>Zaloguj sie</a>
                    </div>
                </div>
            </div>
        );
    }



}


export default LoginPage;