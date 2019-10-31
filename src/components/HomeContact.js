import React from 'react';

class HomeContact extends React.Component{
    constructor(){
        super();
        this.state={
            mailState:'',
            nameState:'',
            messageState:'',
        }
    }
    email = (a)=>{
        this.setState({
            mailState: a
        })};

    name = (a)=>{
        this.setState({
            nameState: a
        })};
    message = (a)=>{
        this.setState({
            messageState: a
        })};
render() {
    return(
        <>
            <div className="contact">
                <div className="contl">

                </div>
                <div className="contr">
                    <h2>Skontaktuj sie z nami</h2>
                    <div className="deco">

                    </div>
                    <div className='positive' id='pos1'>

                    </div>
                    <div className='positive' id={'pos2'}>

                    </div>
                    <div className='formdiv'>
                        <form className='form1'>
                            <div className='part1'>
                                <label><h1>Wpisz swoje imie</h1><br/>
                                    <input type='text'
                                           onChange={(a)=>{this.name(a.target.value)}}
                                           value={this.state.nameState}
                                           maxLength='10' placeholder='Janusz'/>
                                    <div className='check' id='checkname'>
                                    </div>
                                </label>
                                <label><h1>Wpisz swój mail</h1><br/>
                                    <input type='email'
                                           onChange={(a)=>{this.email(a.target.value)}}
                                           value={this.state.mailState}
                                           maxLength='30' placeholder='abc@xyz.com'/>
                                    <div className='check' id='checkmail'>
                                    </div>
                                </label>
                            </div>
                            <div className='part2'>
                                <label><h1>Wpisz swoją wiadomość</h1><br/>
                                    <textarea  onChange={(a)=>{this.message(a.target.value)}}
                                               value={this.state.messageState}
                                               rows='10' cols='70' placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                               Consectetur eos fugit ipsa iure nobis, perspiciatis quibusdam quidem velit. Repudiandae.'/>
                                    <div className='check' id='checktext'>
                                    </div>

                                </label>
                            </div>
                            <div className='buttoncont'>
                                <button type='submit' value='wyślij' onClick={(e)=>{
                                    if((!(this.state.mailState.length>=6 && typeof this.state.mailState==='string' && this.state.mailState.includes('@'))) &&
                                        this.state.nameState.includes(' ') && this.state.messageState.length < 120) {
                                        if (!(this.state.mailState.length >= 6 && typeof this.state.mailState === 'string' && this.state.mailState.includes('@'))) {
                                            e.preventDefault();
                                            let mail = document.querySelector('#checkmail');
                                            mail.innerText = "Mail jest niepoprawny!"
                                        } else {
                                            this.setState({
                                                mailState: '',
                                            })
                                        }
                                        if (this.state.nameState.includes(' ')) {
                                            e.preventDefault();
                                            let name = document.querySelector('#checkname');
                                            name.innerText = "Imie musi być wyrazem!"
                                        } else {
                                            this.setState({
                                                nameState: '',
                                            })
                                        }
                                        if (this.state.messageState.length < 120) {
                                            e.preventDefault();
                                            let text = document.querySelector('#checktext');
                                            text.innerText = "Wiadomość musi mieć minimum 120 znaków!"
                                        } else {
                                            this.setState({
                                                messageState: '',
                                            })
                                        }
                                    }else{
                                        let pos1=document.querySelector('#pos1');
                                        let pos2=document.querySelector('#pos2');
                                        pos1.innerText="Formularz został wysłany!";
                                        pos2.innerText="Niedługo się z tobą skontaktujemy!";

                                        let VarData=new FormData(document.querySelector("form"));
                                        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',
                                            {
                                                method: "POST", // *GET, POST, PUT, DELETE, etc.
                                                mode: "cors", // no-cors, cors, *same-origin
                                                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                                                credentials: "same-origin", // include, *same-origin, omit
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    // "Content-Type": "application/x-www-form-urlencoded",
                                                },
                                                redirect: "follow", // manual, *follow, error
                                                referrer: "no-referrer", // no-referrer, *client
                                                body: VarData,
                                            }).then(r => console.log(r));
                                    }




                                }}>Wyślij</button>
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



}

export default HomeContact;