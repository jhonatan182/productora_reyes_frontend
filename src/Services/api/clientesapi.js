import { axiosPublic } from './axios';

const newCliente = (nombre_cliente, apellido_cliente, identidad_cliente, telefono_cliente, correo_cliente, direccion_cliente) => {
    return axiosPublic.post(
        '/clientes/nuevo-cliente',
        {
            nombre_cliente, 
            apellido_cliente, 
            identidad_cliente, 
            telefono_cliente, 
            correo_cliente, 
            direccion_cliente
        }
        
    )
};

export default newCliente;
