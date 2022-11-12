import { axiosPublic } from './axios';

const newFactura = (cliente_id, numero_factura, impuesto, fecha_factura, tipo_pago, productos) => {
    return axiosPublic.post(
        '/facturacion/',
        {
            cliente_id, 
            numero_factura, 
            impuesto, 
            fecha_factura, 
            tipo_pago, 
            productos
        }
        
    )
};

export default newFactura;
