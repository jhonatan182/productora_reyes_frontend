import React, { useEffect } from "react"
import { Select, ButtonGroup, Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

export default function NavigatorReportes(){
    const Navigate = useNavigate();

    useEffect( ()=>{
        const auth =
          JSON.parse(localStorage.getItem('auth'))
          if(!auth)Navigate('/login')
      }, [])

    return(
        <div>
            <div style={{backgroundColor:'#a0f487', display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img src="https://cdn-icons-png.flaticon.com/512/3408/3408591.png" width={45} height={45} />
                  <h2 style={{textAlign:"center", marginLeft:'1rem'}}> PANEL DE REPORTES </h2>
            </div>
            <div style={{textAlign:'center', marginTop:'0.7rem', marginBottom:'2rem'}}>
                <ButtonGroup variant='contained'>
                <Button variant="outlined" style={{backgroundColor:'#ff4e4a', color:'white'}} onClick={()=>{Navigate('/menu')}}>ATRAS</Button>
                <Button onClick={()=>{Navigate('/reportes/stockProductos')}}>Existencia de Productos</Button>
                <Button onClick={()=>{Navigate('/reportes/ventasEmpleados')}}>Ventas por Empleado</Button>
                <Button onClick={()=>{Navigate('/reportes/comprasClientes')}}>Compras por Clientes</Button>
                <Button onClick={()=>{Navigate('/reportes/productosMasVendidos')}}>Productos más Vendidos</Button>
                </ButtonGroup>
            </div>
      </div>
    )
}