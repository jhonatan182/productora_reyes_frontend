import * as React from 'react';
import Page from '../../Components/Page';
import Buttons from '../../Components//Buttons';
import Presentation from '../../Components/Presentation';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const Navigator = useNavigate();
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
                        <button class="button button1" onClick={facturacion}>Empleados</button>
                        <button class="button button2" onClick={reportes}>Reportes</button>
                    </Buttons>
                </div>
            </div>
        </Page>

    );
}

export default Menu;
