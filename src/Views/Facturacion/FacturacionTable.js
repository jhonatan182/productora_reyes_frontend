//import axios from "axios";
import React, { useState } from 'react';

function ProductosTable(props) {
    //const [id, setId] = useState('');
    const [producto, setProducto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio_producto, setPrecioProducto] = useState('');

    const changeProducto = (event) => {
        setProducto(event.target.value);
    };

    const changeDescripcion = (event) => {
        setDescripcion(event.target.value);
    };

    const changePrecioProducto = (event) => {
        setPrecioProducto(event.target.value);
    };

    const transferValue = (event) => {
        console.log('props obj:', props);
        event.preventDefault();
        const val = {
            producto,
            descripcion,
            precio_producto,
        };
        props.func(val);
        clearState();
    }

    const clearState = () => {
        setProducto('');
        setDescripcion('');
        setPrecioProducto('');
    }

    return (
        <div>
            <label>Producto</label>
            <input type="text" value={producto} onChange={changeProducto}/>
            <label>Descripcion</label>
            <input type="text" value={descripcion} onChange={changeDescripcion}/>
            <label>Precio</label>
            <input type="text" value={precio_producto} onChange={changePrecioProducto}/>
            <button onClick={transferValue}> Agregar Producto</button>
        </div>
    )
}

export default ProductosTable;