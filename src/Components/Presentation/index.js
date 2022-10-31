import './Presentation.css';
import React from 'react'
import Proycomer from '../Images/logo.png'




const Presentation = () => {
    return (
        <div className='principal'>
            <br />
            <h1>Bienvenido</h1>
            <br/>
            <br/>
            <img src={Proycomer}/>
        </div>
    );
}

export default Presentation;