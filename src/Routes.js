import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import GetData from './Views/Inventario/TablaInventario';
import LoginInUx from './Views/Login/LoginUX';
import GetProveedores from './Views/Proveedores/TablaProveedores';
import Menu from './Views/Menu';
import GetClientes from './Views/Clientes/TablaClientes';
import GetEmpleados from './Views/Empleados/TablaEmpleados';
import ProductosMasVendidos from './Views/Reportes/productosMasVendidos';
import ClientesCompras from './Views/Reportes/clienteCompra';
import VentasEmpleados from './Views/Reportes/ventaPorEmpleado';
import StockProductos from './Views/Reportes/stockProductos';
import FacturacionUX from './Views/Facturacion/FacturacionUX';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginInUx />} />
        <Route path="/productos" element={<GetData />} />
        <Route path="/proveedores" element={<GetProveedores />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/clientes" element={<GetClientes />} />
        <Route path="/empleados" element={<GetEmpleados />} />
        <Route path="/facturacion" element={<FacturacionUX />} />
        <Route path="/reportes/productosMasVendidos" element={<ProductosMasVendidos />} />
        <Route path="/reportes/comprasClientes" element={<ClientesCompras />} />
        <Route path="/reportes/ventasEmpleados" element={<VentasEmpleados />} />
        <Route path="/reportes/stockProductos" element={<StockProductos />} />
      </Switch>
    </Router>
  );
}

export default Routes;