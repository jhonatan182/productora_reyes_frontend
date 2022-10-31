import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import GetData from './Views/Inventario/TablaInventario';
import LoginInUx from './Views/Login/LoginUX';
import Menu from './Views/Menu';
import SignInUx from './Views/Signin/SignInUx';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginInUx />} />
        <Route path="/productos" element={<GetData />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signin" element={<SignInUx />} />
      </Switch>
    </Router>
  );
}

export default Routes;