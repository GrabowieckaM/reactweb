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

    submitButton(){
        if(this.state.mailStatus&&this.state.passwordStatus){
            return <input type='submit' value='Zaloguj się'/>
        }
    }

    failPassword(){
        if((this.state.passwordStatus===false )){
            return  <div className='check'>
                Podane hasło jest zbyt krótkie
            </div>
        }
    }
    failSecPassword(){
        if((!(this.state.passwordState===this.state.secpasswordState)))
            return  <div className='check'>
                Hasła nie są takie same!!
            </div>

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
            <div className='registrycont'>
                <div className='login'>
                    <h1>Załóż konto</h1>
                    <div className='deco'>

                    </div>
                    <div className='logform'>
                        <form>
                            <label>Email<br/>
                                <input onChange={(a)=>{this.checkEmail(a.target.value)}} value={this.state.mailState} type='email' maxLength='20'/>
                                       {this.failMail()}
                            </label>
                            <label>Hasło<br/>
                                <input onChange={(e)=>{this.checkPassword(e.target.value)}} value={this.state.passwordState} type='password' maxLength='14'/>
                                {this.failPassword()}
                            </label>
                            <label>Powtórz hasło<br/>
                                <input onChange={(e)=>{this.checkSecPassword(e.target.value)}} value={this.state.secpasswordState} type='password' maxLength='14'/>

                                {this.failSecPassword()}
                            </label>
                        </form>
                    </div>
                    <div className='pages'>
                        <a href='/log'>Zaloguj się</a>
                        <input type='submit' value='Zarejestruj się'/>
                    </div>
                </div>
            </div>
        );
    }



}

export default RegistryPage;