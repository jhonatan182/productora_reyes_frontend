import './Presentation.css';
import Imagen1 from '../../Components/Images/vacunacion1.png';
import Imagen2 from '../../Components/Images/vacunacion2.png';
import Imagen3 from '../../Components/Images/vacunacion3.jpg';
import Imagen4 from '../../Components/Images/vacunacion4.jpeg';
import Imagen5 from '../../Components/Images/vacunacion5.jpg';
import Imagen6 from '../../Components/Images/vacunacion6.jpg';
import React from 'react'
import Carousel from 'better-react-carousel'




const Presentation = () => {


    return (
        <div className='principal'>
            <Carousel cols={3} rows={1} gap={10} loop autoplay={7000}>
                <Carousel.Item>
                    <img width="100%" src={Imagen1} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Imagen2} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Imagen3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Imagen4} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Imagen5} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={Imagen6} alt="" />
                </Carousel.Item>
            </Carousel>
            <br />
            <h1>Los síntomas más habituales son los siguientes:</h1>
            <p> Fiebre, Tos, Cansancio, Pérdida del gusto o del olfato.</p>
            <br/>
            <br/>
            <div class="cards">
                <div className="card">
                    <div className="contenido-texto-card">
                        <h2>La COVID-19 afecta de distintas maneras en función de cada persona</h2>
                        <p>
                            La mayoría de las personas que se contagian presentan síntomas de intensidad leve o moderada, y se recuperan sin necesidad de hospitalización.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="contenido-texto-card">

                        <h2>Es importante que sepas</h2>
                        <p>
                            •No significa que, si una persona contrae la enfermedad, no pueda curarse. <br />
                            •Es deber de la población sumarse a prevenir el contagio del coronavirus adoptando las medidas de higiene y prevención necesarias.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="contenido-texto-card">

                        <h2>Una revisión de artículos de investigación</h2>
                        <p>De diciembre de 2020 estimó que el 17 por ciento de las personas con COVID-19 son en realidad asintomáticas. Esto significa que no presentan ningún síntoma.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;