import { axiosPublic } from './axios';

const newProduct = (producto, descripcion, stock, precio_producto, proveedor_id) => {
    return axiosPublic.post(
        '/productos/nuevo-producto',
        {
            producto, 
            descripcion, 
            stock, 
            precio_producto, 
            proveedor_id
        }
        
    )
};

export default newProduct;
