import axios from "axios";
import React, { useState } from 'react';
import Page from "../../Components/Page"
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";
import TextField from '@mui/material/TextField';
//import TableData from './FacturacionForm';

function clean (){
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
    clienteIdValue = "",
    empleadoIdValue = "",
    facturaValue = "",
    dateValue = "",
    isvValue = "",
    paymentValue = "",
    productoValue = "",
    onChangeHandler = () => { },
    onSaveClick = () => {},
    
  }) => {
    return (
      <Page
        showNavBar={true}
        useAbsoluteCenter={true}
        pageTitle="Facturacion"
      >
         <form style={{ minWidth: "380px", maxWidth: "640px"}}>
            <h1 style={{textAlign: "center"}}>Facturacion</h1>

        </form>
        <Field
          name="cliente_id"
          labelText="Cliente"
          type="text"
          value={clienteIdValue}
          onChange={onChangeHandler}
        />
        <Field
          name="empleado_id"
          labelText="Empleado"
          type="text"
          value={empleadoIdValue}
          onChange={onChangeHandler}
        />
        <Field
          name="numero_factura"
          labelText="Numero de Factura"
          type="text"
          value={facturaValue}
          onChange={onChangeHandler}
        />
        <Field
          name="fecha_factura"
          labelText="Fecha"
          type="datetime-local"
          value={dateValue}
          onChange={onChangeHandler}
        />
        <Field
          name="impuesto"
          labelText="Impuesto"
          type="text"
          value={isvValue}
          onChange={onChangeHandler}
        />
        <TextField
          id="tipo_pago"
          name="tipo_pago"
          type="text"
          label="Tipo de Pago"
          value={paymentValue}
          onChange={onChangeHandler}
        />
        <TextField
          id="producto"
          name="producto"
          type="text"
          label="Productos"
          value={productoValue}
          onChange={onChangeHandler}
        />
        <div style={{justifyContent: "center"}}>
        <Buttons>
          <button class="button button1" onClick={onSaveClick}>Ingresar Producto</button>
          <button class="button button1" onClick={clean}>Limpiar</button>
        </Buttons>
        </div>
      </Page>
    );
  }
  
  export default FacturacionUX;
  
