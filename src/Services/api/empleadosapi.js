import { axiosPrivate } from './axios';

const newEmpleado = (nombre_empleado, apellido_empleado, identidad_empleado, telefono_empleado, correo_empleado, direccion_empleado, rol_id) => {
    return axiosPrivate.post(
        '/empleados/nuevo-empleado',
        {
            nombre_empleado, 
            apellido_empleado, 
            identidad_empleado, 
            telefono_empleado, 
            correo_empleado, 
            direccion_empleado, 
            rol_id
        }
        
    )
};

export default newEmpleado;