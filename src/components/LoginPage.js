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

    submitButton(){
        if(this.state.mailStatus&&this.state.passwordStatus){
            return <input type='submit' value='Zaloguj się'/>
        }
    }

    failPassword(){
        if(this.state.passwordStatus===false){
          return  <div className='check'>
                Podane hasło jest zbyt krótkie
            </div>
        }
    }
    failMail(){
        if(this.state.mailStatus===false){
            return  <div className='check'>
                Podany email jest nieprawidłowy
            </div>
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
                                <input
                                    onChange={(a)=>{this.checkEmail(a.target.value)}}
                                    value={this.state.mailState}
                                    type='email' maxLength='20'/>
                                {this.failMail()}
                            </label>
                            <label>Hasło<br/>
                                <input
                                    onChange={(e)=>{this.checkPassword(e.target.value)}}
                                    value={this.state.passwordState}
                                    type='password' maxLength='14'/>
                                {this.failPassword()}
                            </label>
                        </form>
                    </div>
                    <div className='pages'>
                        <a href='/registry'>Załóż konto</a>
                        <input type='submit' value='Zaloguj się' onClick={(e)=>{

                            if(!(this.state.mailState.length>=6 && typeof this.state.mailState==='string' && this.state.mailState.includes('@'))){
                                e.preventDefault();
                                console.log('zly mail');
                            }

                            if(!(this.state.passwordState.length>= 6 && typeof this.state.passwordState==='string')){
                                e.preventDefault();
                                console.log('zle haslo');
                            }

                        }}/>

                    </div>
                </div>
            </div>
        );
    }



}


export default LoginPage;