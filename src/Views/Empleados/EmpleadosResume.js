import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import MaterialTable from 'material-table';
import axios from 'axios';
import { Modal, Buttton, TextField } from '@material-ui/core';
import Buttons from '../../Components/Buttons';
import Empleados from '.';

export const TableAxios = () => {
    //1 - configuramos Los hooks
    const [empleados, setEmpleados] = useState([]);

    //2 - fcion para mostrar los datos con axios
    const endpoint = `${process.env.REACT_APP_API_HOST}/empleados/`;

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data;
            console.log(data);
            setEmpleados(data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    //3 - Definimos las columns
    const columns = [
        {
            name: 'nombre_empleado',
            label: 'Nombre del empleado',
        },
        {
            name: 'apellido_empleado',
            label: 'Apellido del empleado',
        },
        {
            name: 'identidad_empleado',
            label: 'Identidad del empleado',
        },
        {
            name: 'telefono_empleado',
            label: 'Telefono del empleado',
        },
        {
            name: 'correo_empleado',
            label: 'Correo del empleado',
        },
        {
            name: 'direccion_empleado',
            label: 'Direccion del empleado',
        },
        {
            name: 'rol_id',
            label: 'Codigo de Rol del Empleado',
        },
    ];
    //4 - renderizamos la datatable
    return (
        <MUIDataTable
            title={'Tabla de Empleados'}
            data={empleados}
            columns={columns}
            actions={[
                {
                    icon: 'edit',
                    tooltip: 'Editar Empleado',
                },
                {
                    icon: 'delete',
                    tooltip: 'Eliminar Empleado',
                },
            ]}
        />
    );
};
