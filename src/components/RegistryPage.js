import React from 'react';
import ReactDOM from 'react-dom';

class RegistryPage extends React.Component{
    constructor(){
        super();
        this.state={
            mailState:'',
            passwordState:'',
            secpasswordState:'',
            mailStatus: true,
            passwordStatus: true,
            secpasswordStatus: true
        }
    }

    checkPassword = (e)=>{
        if(e.length>= 6 && typeof e==='string'){
            this.setState({
                passwordStatus: true,
                passwordState: e
            })
        } else{
            this.setState({
                passwordStatus: false,
                passwordState: e
            })
        }

    }
    checkSecPassword = (e)=>{
        if(e.length>= 6 && typeof e==='string'&&(this.state.passwordState===this.state.secpasswordState)){
            this.setState({
                secpasswordStatus: true,
                secpasswordState: e
            })
        } else{
            this.setState({
                secpasswordStatus: false,
                secpasswordState: e
            })
        }

    }

    checkEmail = (a)=>{
        if(a.length>=6 && typeof a==='string' && a.includes('@')){
            this.setState({
                mailStatus: true,
                mailState: a
            })
        } else{
            this.setState({
                mailStatus: false,
                mailState: a
            })
        }

    }


    failSecPassword(){
        if((!(this.state.passwordState===this.state.secpasswordState)))
            return  <div className='check'>
                Hasła nie są takie same!!
            </div>

    }

    render() {
        return(
            <div className='registrycont'>
                <div className='login'>
                    <h1>Załóż konto</h1>
                    <div className='deco'>

                    </div>
                    <div className='logform'>
                        <form>
                            <label>Email<br/>
                                <input onChange={(a)=>{this.checkEmail(a.target.value)}} value={this.state.mailState} type='email' maxLength='20'/>
                                <div className='check' id='checkmail'>
                                </div>
                            </label>
                            <label>Hasło<br/>
                                <input onChange={(e)=>{this.checkPassword(e.target.value)}} value={this.state.passwordState} type='password' maxLength='14'/>
                                <div className='check' id='checkpass'>
                                </div>
                            </label>
                            <label>Powtórz hasło<br/>
                                <input onChange={(e)=>{this.checkSecPassword(e.target.value)}} value={this.state.secpasswordState} type='password' maxLength='14'/>
                                <div className='check' id='checkpass2'>
                                </div>
                            </label>
                        </form>
                    </div>
                    <div className='pages'>
                        <a href='/log'>Zaloguj się</a>
                        <input type='submit' value='Zarejestruj się' onClick={(e)=>{


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

                            if((!(this.state.passwordState===this.state.secpasswordState))){
                                e.preventDefault();
                                let pass2=document.querySelector('#checkpass2');
                                pass2.innerText="Hasła nie są takie same!"
                            }else{
                                this.setState({
                                    secpasswordStatus: true,
                                    secpasswordState: '',
                                })
                            }

                        }}/>
                    </div>
                </div>
            </div>
        );
    }



}

export default RegistryPage;