import { axiosPrivate, axiosPublic } from './axios';

const newProveedor = (nombre_proveedor, descripcion_proveedor, identidad_proveedor, telefono_proveedor, correo_proveedor, direccion_proveedor) => {
    return axiosPrivate.post(
        '/proveedores/guardar',
        {
            nombre_proveedor,
            descripcion_proveedor,
            identidad_proveedor,
            telefono_proveedor,
            correo_proveedor,
            direccion_proveedor 
        }
        
    )
};

export default newProveedor;
