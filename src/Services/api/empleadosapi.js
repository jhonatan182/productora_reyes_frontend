import { axiosPrivate } from './axios';

const newEmpleado = (nombre_empleado, apellido_empleado, identidad_empleado, telefono_empleado, correo_empleado, direccion_empleado, rol_id, usuario, password) => {
    return axiosPrivate.post(
        '/empleados/guardar',
        {
            nombre_empleado, 
            apellido_empleado, 
            identidad_empleado, 
            telefono_empleado, 
            correo_empleado, 
            direccion_empleado, 
            rol_id, 
            usuario, 
            password
        }
        
    )
};

export default newEmpleado;