import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import axios from 'axios';
import Clientes from '.';

export const TableAxios = () => {
    //1 - configuramos Los hooks
    const [clientes, setClientes] = useState([]);

    //2 - fcion para mostrar los datos con axios
    useEffect(() => {
        const consultarClientes = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_API_HOST}/clientes/`
                );
                setClientes(data);
            } catch (error) {
                console.log(error);
            }
        };

        consultarClientes();
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
