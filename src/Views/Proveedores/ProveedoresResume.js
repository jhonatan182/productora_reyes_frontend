import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import MaterialTable from 'material-table';
import axios from 'axios';
import { Modal, Buttton, TextField } from '@material-ui/core';
import Buttons from '../../Components/Buttons';
import Proveedores from '.';

export const TableAxios = () => {
    //1 - configuramos Los hooks
    const [proveedores, setProveedores] = useState([]);

    //2 - fcion para mostrar los datos con axios
    const endpoint = `${process.env.REACT_APP_API_HOST}/proveedores/`;

    const getData1 = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data;
            console.log(data);
            setProveedores(data);
        });
    };

    useEffect(() => {
        getData1();
    }, []);

    //3 - Definimos las columns
    const columns = [
        {
            name: 'nombre_proveedor',
            label: 'Nombre del proveedor',
        },
        {
            name: 'descipcion_proveedor',
            label: 'descipcion del proveedor',
        },
        {
            name: 'identidad_proveedor',
            label: 'Identidad del proveedor',
        },
        {
            name: 'telefono_proveedor',
            label: 'Telefono del proveedor',
        },
        {
            name: 'correo_proveedor',
            label: 'Correo del proveedor',
        },
        {
            name: 'direccion_proveedor',
            label: 'Direccion del proveedor',
        },
    ];
    //4 - renderizamos la datatable
    return (
        <MUIDataTable
            title={'Tabla de proveedores'}
            data={proveedores}
            columns={columns}
            actions={[
                {
                    icon: 'edit',
                    tooltip: 'Editar proveedor',
                },
                {
                    icon: 'delete',
                    tooltip: 'Eliminar proveedor',
                },
            ]}
        />
    );
};
