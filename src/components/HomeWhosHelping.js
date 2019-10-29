import React from 'react';

class HomeWHosHelping extends React.Component{


render() {

    return(
        <div className='whcont'>
            <h1>Komu pomagamy?</h1>
            <div className="deco">

            </div>
            <div className="buttons">
                <button id='frst' onClick={()=>{

                }}>Fundacjom</button>
                <button id='sec' autoFocus onClick={()=>{
                    console.log(this.newvar);
                }
                }>Organizacjom pozarządowym</button>
                <button id='trd'onClick={()=>{
                    console.log('sieeema3')}}>Lokalnym zbiórkom</button>
            </div>
            <div className="bigcontain">

            </div>
        </div>
    );
}



}

export default HomeWHosHelping;