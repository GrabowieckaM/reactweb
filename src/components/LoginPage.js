import React from 'react';
import ReactDOM from 'react-dom';

class LoginPage extends React.Component{

    constructor(){
        super();
        this.state={
            mailState:'',
            passwordState:'',
            mailStatus:true,
            passwordStatus:true
        }
    }

    checkPassword = (e)=>{
            this.setState({
                passwordStatus: true,
                passwordState: e
            })

    }

    checkEmail = (a)=>{
            this.setState({
                mailStatus: true,
                mailState: a
            })


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
                                <input
                                    onChange={(a)=>{this.checkEmail(a.target.value)}}
                                    value={this.state.mailState}
                                    type='email' maxLength='20'/>
                                <div className='check' id='checkmail'>
                                </div>

                            </label>
                            <label>Hasło<br/>
                                <input id="g"
                                    onChange={(e)=>{this.checkPassword(e.target.value)}}
                                    value={this.state.passwordState}
                                    type='password' maxLength='14'/>
                                <div className='check' id='checkpass'>
                                </div>
                            </label>
                        </form>
                    </div>
                    <div className='pages'>
                        <a href='/registry'>Załóż konto</a>
                        <input type='submit' value='Zaloguj się' onClick={(e)=>{


                            if(!(this.state.mailState.length>=6 && typeof this.state.mailState==='string' && this.state.mailState.includes('@'))){
                                e.preventDefault();
                                let mail=document.querySelector('#checkmail');
                                mail.innerText="Mail jest niepoprawny!"
                            }else{
                                this.setState({
                                    mailStatus:true,
                                    mailState:'',
                                })
                            }

                            if(!(this.state.passwordState.length>= 6 && typeof this.state.passwordState==='string')){
                                e.preventDefault();
                                let pass=document.querySelector('#checkpass');
                                pass.innerText="Hasło jest zbyt krótkie!"
                            }else{
                                this.setState({
                                    passwordStatus:true,
                                    passwordState:'',
                                })
                            }

                        }}/>

                    </div>
                </div>
            </div>
        );
    }



}


export default LoginPage;