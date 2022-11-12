import * as React from 'react';
import axios from "axios";
import { useState } from 'react';
import Page from "../../Components/Page"
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { PropaneSharp } from '@mui/icons-material';
//import MenuItem from '@mui/material/MenuItem';

function clean (){
  window.location.reload();
}

const [products, setProducts] = useState ([])

const getDataProductos = async (month = 1) => {
  await axios.get('http://localhost:4000/api/productos'+encodeURIComponent(month)).then((response) => {
      setProducts(response.data);
    }).catch(error=>{console.log("Error")})
}

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

const impuesto = 0.15;

function ccyFormat(num){
  return `${num.toFixed(2)}`;
}

function totalRow(cantidad, precio_unitario){
  return cantidad*precio_unitario;
}

function createRow(producto,cantidad,precio_unitario) {
  const total = totalRow(cantidad, precio_unitario);
  return {producto, cantidad, precio_unitario, total}
}

function subtotal(items) {
  return items.map(({total}) => total).reduce((sum,i) =>sum +i,0);
}

const transferValue = (event) => {
  event.preventDefault();
  const val = {
    getDataProductos
  };
  props.func(val);
  clearState();
}

const invoiceSubtotal = subtotal();
const invoiceTaxes = impuesto * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const FacturacionUX = ({
    clienteIdValue = "",
    empleadoIdValue = "",
    facturaValue = "",
    dateValue = "",
    isvValue = "",
    //paymentValue = "",
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
          value={getDataProductos}
          onChange={onChangeHandler}
          helperText="Seleccione el Producto"
        />
        <button class="button button1" onClick={transferValue}>Agregar Producto</button>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{minWidth:700}} aria-lable="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    Detalles
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> ISV </TableCell>
                  <TableCell align="right">{`${(impuesto*100).toFixed(0)} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colspan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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
  
