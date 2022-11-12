import { axiosPublic } from './axios';

const newFacturacion = (id_producto, id_factura, cantidad, precio_unitario) => {
    return axiosPublic.post(
        '/detalleFacturacion/guardar',
        {
            id_producto, 
            id_factura, 
            cantidad, 
            precio_unitario,            
        }
    )
};

export default newFacturacion;
