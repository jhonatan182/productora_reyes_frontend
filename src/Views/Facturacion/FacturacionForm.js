import React, { useState } from 'react';
import FacturacionTable from './FacturacionTable';
import jsonData from './data.json';

function TableData() {
    
    const [productData, setProductData] = useState(jsonData);

    const tableRows = productData.map((info) => {
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.producto}</td>
                <td>{info.descripcion}</td>
                <td>{info.precio_producto}</td>
            </tr>
        );
    });

    const addRows = (data) => {
        const totalProductos = productData.length;
        data.id = totalProductos + 1;
        const updatedProductData = [...productData];
        updatedProductData.push(data);
        setProductData(updatedProductData);
    };

    return (
        <div>
            <FacturacionTable func={addRows} />
            <div style={{justifyContent: "center"}}>
            <table>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Precio Unitario</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
            </div>
        </div>
    );

}

export default TableData;