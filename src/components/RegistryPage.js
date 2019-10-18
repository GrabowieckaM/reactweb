import React from 'react';
import ReactDOM from 'react-dom';

function RegistryPage() {

    return(
        <div className='registrycont'>
            <div className='login'>
                <h1>Załóż konto</h1>
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
                        <label>Powtórz hasło<br/>
                            <input type='password' maxLength='10'/>
                        </label>
                    </form>
                </div>
                <div className='pages'>
                    <a href='/log'>Zaloguj się</a>
                    <a href='/registry'>Załóż konto</a>
                </div>
            </div>
        </div>
    );

}

export default RegistryPage;