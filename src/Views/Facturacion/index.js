import FacturacionUX from "./FacturacionUX";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Facturacion = () => {
  const Navigator = useNavigate();

  const {isLoading,error} = useSelector(state=> state.security);

  const facturacion = () => {
    Navigator('/facturacion');
  }

  return (
    <FacturacionUX
      isLoading={isLoading}
      error={error}
    />
  );
}
export default Facturacion;
