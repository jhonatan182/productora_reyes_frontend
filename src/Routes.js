import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import GetData from './Views/Inventario/TablaInventario';
import LoginInUx from './Views/Login/LoginUX';
import Menu from './Views/Menu';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginInUx />} />
        <Route path="/productos" element={<GetData />} />
        <Route path="/menu" element={<Menu />} />
      </Switch>
    </Router>
  );
}

export default Routes;