import './homebar.css';
import { Home } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

const HomeBar = ({ }) => {
    const Navigator = useNavigate();
    const Menu = () =>{
     Navigator('/menu');
    }
  return (
    <nav className="navbar2">
    <button class="btn fa fa-home"><a class='link' href="/menu">  Menu Principal</a></button>
    </nav>
  )
}

export default HomeBar;
