import './Presentation.css';
import React from 'react'
import Proycomer from '../Images/logo.png'




const Presentation = () => {
    return (
        <div className='principal'>
            <h1>Bienvenido</h1>
            <img src={Proycomer}/>
        </div>
    );
}

export default Presentation;