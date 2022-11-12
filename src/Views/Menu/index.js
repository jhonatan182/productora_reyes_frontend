import React, { useState, useEffect } from 'react';
import Page from '../../Components/Page';
import Buttons from '../../Components//Buttons';
import Presentation from '../../Components/Presentation';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    
    const Navigator = useNavigate();

    useEffect(()=>{
        const auth =
          JSON.parse(localStorage.getItem('auth'))
          if(!auth)Navigator('/login')
      }, [])
      
    const navegar = () => {
         Navigator('/menu');
    }
    const productos = () => {
        Navigator('/productos');
    }
    const SignIn = () => {
        Navigator('/signin');
    }
    const empleados = () => {
        Navigator('/empleados');
    }
    const clientes = () => {
        Navigator('/clientes');
    }
    const proveedores = () => {
        Navigator('/proveedores');
    }
    const facturacion = () => {
        Navigator('/facturacion');
    }
    const reportes = () => {
        Navigator('/reportes/productosMasVendidos');
    }
    const logout = () => {
        const auth =
        localStorage.removeItem('auth');
        if(!auth)Navigator('/login')
    }

    return (
       
        <Page
            showNavBar={true}
            useAbsoluteCenter={true}
            pageTitle="Menú Principal">
            <div>
            </div>
            <div>
                <Presentation></Presentation>
                <div>
                    <Buttons>
                        <button class="button button1" onClick={productos}>Productos</button>
                        <button class="button button2" onClick={SignIn}>Usuario</button>
                        <button class="button button1" onClick={empleados}>Empleados</button>
                        <button class="button button2" onClick={clientes}>Clientes</button>
                        <button class="button button2" onClick={proveedores}>Proveedores</button>
                        <button class="button button1" onClick={facturacion}>Facturacion</button>
                        <button class="button button2" onClick={reportes}>Reportes</button>
                        <button class="button button3" onClick={logout}>Cerrar Sesión</button>
                    </Buttons>
                </div>
            </div>
        </Page>

    );
}

export default Menu;
