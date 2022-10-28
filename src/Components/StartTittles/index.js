import './TitulosInicio.css';

const TitulosInicio = ({ title })=> {
    return(
            <h1 className="tituloinicial">
              <b>{title}</b>
            </h1>
    );
}

export default TitulosInicio;