import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import MaterialTable from 'material-table';
import axios from 'axios';
import { Modal, Buttton, TextField } from '@material-ui/core';
import Buttons from '../../Components/Buttons';
import Clientes from '.';

export const TableAxios = () => {
    //1 - configuramos Los hooks
    const [clientes, setClientes] = useState([]);

    //2 - fcion para mostrar los datos con axios
    const endpoint = `${process.env.REACT_APP_API_HOST}/clientes/`;

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data;
            console.log(data);
            setClientes(data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    //3 - Definimos las columns
    const columns = [
        {
            name: 'nombre_cliente',
            label: 'Nombre del Cliente',
        },
        {
            name: 'apellido_cliente',
            label: 'Apellido del Cliente',
        },
        {
            name: 'identidad_cliente',
            label: 'Identidad del Cliente',
        },
        {
            name: 'telefono_cliente',
            label: 'Telefono del Cliente',
        },
        {
            name: 'correo_cliente',
            label: 'Correo del Cliente',
        },
        {
            name: 'direccion_cliente',
            label: 'Direccion del Cliente',
        },
    ];
    //4 - renderizamos la datatable
    return (
        <MUIDataTable
            title={'Tabla de Clientes'}
            data={clientes}
            columns={columns}
            actions={[
                {
                    icon: 'edit',
                    tooltip: 'Editar Cliente',
                },
                {
                    icon: 'delete',
                    tooltip: 'Eliminar Cliente',
                },
            ]}
        />
    );
};
