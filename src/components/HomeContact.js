import React from 'react';

function HomeContact() {

    return(
        <>
        <div className="contact">
            <div className="contl">

            </div>
            <div className="contr">
            <h2>Skontaktuj sie z nami</h2>
                <div className="deco">

                </div>
                <div className='formdiv'>
                <form className='form1'>
                    <div className='part1'>
                        <label><h1>Wpisz swoje imie</h1><br/>
                    <input type='text' maxLength='10' placeholder='Janusz'/>
                    </label>
                        <label><h1>Wpisz swój mail</h1><br/>
                        <input type='email' maxLength='30' placeholder='abc@xyz.com'/>
                    </label>
                    </div>
                    <div className='part2'>
                    <label><h1>Wpisz swoją wiadomość</h1><br/>
                    <textarea rows='10' cols='70' placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur eos fugit ipsa iure nobis, perspiciatis quibusdam quidem velit. Repudiandae.'/>
                    </label>
                    </div>
                    <div className='buttoncont'>
                    <button type='submit' value='wyślij'>Wyślij</button>
                    </div>
                </form>
                </div>
            </div>

        </div>
            <footer className='ftr'>
            <h1>Copyright by CodersLab</h1>

            </footer>
            </>

    );

}

export default HomeContact;