import './ButtonsLogout.css';
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ButtonsLogout = ({ title })=> {
    const Navigator = useNavigate();
    const navegar = () => {
         Navigator('/login');
    }
    return(
            <button className="buttonslogout" onClick={navegar}>
              <FaSignOutAlt />
            </button>
    );
}

export default ButtonsLogout;