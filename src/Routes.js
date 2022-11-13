import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import FacturacionUX from './Views/Facturacion/FacturacionUX';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/facturacion" element={<FacturacionUX />} />
      </Switch>
    </Router>
  );
}

export default Routes;