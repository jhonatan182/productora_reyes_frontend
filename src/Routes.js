import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import GetData from './Views/Inventario/TablaInventario';
import LoginInUx from './Views/Login/LoginUX';
import Menu from './Views/Menu';
import ProductosMasVendidos from './Views/Reportes/productosMasVendidos';
import ClientesCompras from './Views/Reportes/clienteCompra';
import VentasEmpleados from './Views/Reportes/ventaPorEmpleado';
import StockProductos from './Views/Reportes/stockProductos';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginInUx />} />
        <Route path="/productos" element={<GetData />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reportes/productosMasVendidos" element={<ProductosMasVendidos />} />
        <Route path="/reportes/comprasClientes" element={<ClientesCompras />} />
        <Route path="/reportes/ventasEmpleados" element={<VentasEmpleados />} />
        <Route path="/reportes/stockProductos" element={<StockProductos />} />
      </Switch>
    </Router>
  );
}

export default Routes;