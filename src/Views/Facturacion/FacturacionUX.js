import axios from "axios";
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Page from "../../Components/Page"
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";
import TextField from '@mui/material/TextField';
import newFactura from "../../Services/api/facturacionapi";
//import TableData from './FacturacionForm';

function clean() {
  window.location.reload();
}

//const [products, setProducts] = useState ([])

/*const getDataProductos = async (month = 1) => {
  await axios.get('http://localhost:4000/api/productos'+encodeURIComponent(month)).then((response) => {
      setProducts(response.data);
    }).catch(error=>{console.log("Error")})
}*/

/*const tiposPago = [
  {
    value: 'EFE',
    label: 'Efectivo',
  },
  {
    value: 'TAR',
    label: 'Tarjeta de Crédito o Débito',
  },
  {
    value: 'CHQ',
    label: 'Cheque',
  },
  {
    value: 'TRN',
    label: 'Transferencia',
  }
]*/


const FacturacionUX = ({
  error = "",
}) => {
  const Navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    cliente_id: '',
    empleado_id: '',
    numero_factura: '',
    impuesto: '',
    fecha_factura: '',
    tipo_pago: '',
    productos: '',
  });
  const onChangeHandler = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
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
      //console.log(data);
      Navigate('/facturacion');
    } catch (ex) {
      console.log(ex);
    }
  }


  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Facturacion"
    >
      <form style={{ minWidth: "380px", maxWidth: "640px" }}>
        <h1 style={{ textAlign: "center" }}>Facturacion</h1>

      </form>
      <Field
        name="cliente_id"
        labelText="Cliente"
        type="text"
        value={formValues.clienteIdValue}
        onChange={onChangeHandler}
      />
      <Field
        name="empleado_id"
        labelText="Empleado"
        type="text"
        value={formValues.empleadoIdValue}
        onChange={onChangeHandler}
      />
      <Field
        name="numero_factura"
        labelText="Numero de Factura"
        type="text"
        value={formValues.facturaValue}
        onChange={onChangeHandler}
      />
      <Field
        name="fecha_factura"
        labelText="Fecha"
        type="datetime-local"
        value={formValues.dateValue}
        onChange={onChangeHandler}
      />
      <Field
        name="impuesto"
        labelText="Impuesto"
        type="text"
        value={formValues.isvValue}
        onChange={onChangeHandler}
      />
      <TextField
        id="tipo_pago"
        name="tipo_pago"
        type="text"
        label="Tipo de Pago"
        value={formValues.paymentValue}
        onChange={onChangeHandler}
      />
      <TextField
        id="producto"
        name="producto"
        type="text"
        label="Productos"
        value={formValues.productoValue}
        onChange={onChangeHandler}
      />
      <div style={{ justifyContent: "center" }}>
        <Buttons>
          <button class="button button1" onClick={onSaveClick}>Ingresar Producto</button>
          <button class="button button1" onClick={clean}>Limpiar</button>
        </Buttons>
      </div>
    </Page>
  );
}

export default FacturacionUX;

