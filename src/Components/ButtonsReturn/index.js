import './ButtonsReturn.css';
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ButtonsReturn = ({ title })=> {
    const Navigator = useNavigate();
    const navegar = () => {
         Navigator('/menu');
    }
    return(
            <button className="buttonsreturn" onClick={navegar}>
              <FaHome />
            </button>
    );
}

export default ButtonsReturn;