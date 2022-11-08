import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import GetData from './Views/Clientes/TablaClientes';
import GetData from './Views/Empleados/TablaEmpleados';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/clientes" element={<GetData />} />
        <Route path="/empleados" element={<GetData />} />
      </Switch>
    </Router>
  );
}

export default Routes;
