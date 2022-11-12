import axios from "axios";
import React, { useState } from 'react';
import Page from "../../Components/Page"
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";
//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import { PropaneSharp } from '@mui/icons-material';
//import MenuItem from '@mui/material/MenuItem';
import TableData from './FacturacionForm';

function clean (){
  window.location.reload();
}

//const [products, setProducts] = useState ([])

/*const getDataProductos = async (month = 1) => {
  await axios.get('http://localhost:4000/api/productos'+encodeURIComponent(month)).then((response) => {
      setProducts(response.data);
    }).catch(error=>{console.log("Error")})
}*/

const tiposPago = [
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
]

//const impuesto = 0.15;

//function ccyFormat(num){
//  return `${num.toFixed(2)}`;
//}

//function totalRow(cantidad, precio_unitario){
//  return cantidad*precio_unitario;
//}

//function createRow(producto,cantidad,precio_unitario) {
//  const total = totalRow(cantidad, precio_unitario);
//  return {producto, cantidad, precio_unitario, total}
//}

//function subtotal(items) {
// return items.map(({total}) => total).reduce((sum,i) =>sum +i,0);
//}

//const clearState = () => {
//  setProducts('');
//}

//const invoiceSubtotal = subtotal();
//const invoiceTaxes = impuesto * invoiceSubtotal;
//const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const FacturacionUX = ({
    clienteIdValue = "",
    empleadoIdValue = "",
    facturaValue = "",
    dateValue = "",
    isvValue = "",
    //paymentValue = "",
    producto = "",
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
          select
          label="Tipo de Pago"
          value={tiposPago}
          onChange={onChangeHandler}
          helperText="Seleccione el Tipo de Pago"
        />
        <TextField
          id="producto"
          name="producto"
          select
          label="Productos"
          value={producto}
          onChange={onChangeHandler}
          helperText="Seleccione el Producto"
        />
        <div>
          <TableData />
        </div>

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
  
