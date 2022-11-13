import FacturacionUX from "./FacturacionUX";
import FacturacionForm from "./FacturacionForm";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newFactura from "../../Services/api/facturacionapi";
import newFacturacion from "@Services/api/detalleFacturacionapi"

const Facturacion = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    cliente_id: '',
    empleado_id: '',
    numero_factura: '',
    impuesto: '',
    fecha_factura: '',
    tipo_pago: '',
    productos:'',
    });

  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }


  const onSaveClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await newFactura(
      formValues.cliente_id,
      formValues.empleado_id,
      formValues.numero_factura,
      formValues.impuesto,
      formValues.fecha_factura,
      formValues.tipo_pago,
      formValues.productos,
      );
      console.log(data);
      Navigator('/facturacion');
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <FacturacionUX
      clienteValue = {formValues.cliente_id}
      empleadoValue = {formValues.empleado_id}
      facturaValue = {formValues.numero_factura}
      isvValue = {formValues.impuesto}
      dateValue = {formValues.fecha_factura}
      paymentValue = {formValues.tipo_pago}
      productoValue = {formValues.productos}
      onProductListClick = {onProductListClick}
      onChangeHandler={onChangeHandler}
      onSaveClick={onSaveClick}
    />
  );
}
export default Facturacion;
