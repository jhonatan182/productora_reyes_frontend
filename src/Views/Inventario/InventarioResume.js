import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import MaterialTable from 'material-table';
import axios from "axios";
import { Modal, Buttton, TextField } from '@material-ui/core';
import Buttons from "../../Components/Buttons";

export const TableAxios = () => {
//1 - configuramos Los hooks
const [products, setProducts] = useState( [] )


//2 - fcion para mostrar los datos con axios
const endpoint = 'http://localhost:4000/api/productos/'

const getData = async () => {
    await axios.get(endpoint).then((response) => {
        const data = response.data
        console.log(data)
        setProducts(data)
    })
}

useEffect( ()=>{
    getData()
}, [])

//3 - Definimos las columns
const columns = [
    {
        name: "producto",
        label: "Nombre Producto"
    },
    {
        name: "descripcion",
        label: "Descripcion Producto"
    },
    {
        name: "stock",
        label: "Stock"
    },
    {
        name: "precio_producto",
        label: "Precio Producto"
    },
    {
        name: "proveedor_id",
        label: "ID Proveedor"
    }
]
//4 - renderizamos la datatable
        return (
            <MUIDataTable 
            title={"Inventario de Productos"}
            data={products}
            columns={columns}
            actions={[
                {
                  icon: 'edit',
                  tooltip: 'Editar Artista',
                },
                {
                  icon: 'delete',
                  tooltip: 'Eliminar Artista',
                }
              ]}
            />
            
        )

}