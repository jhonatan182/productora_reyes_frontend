import InventarioUx from "./EmpleadosUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newCliente from "../../Services/api/empleadosapi";
import newEmpleado from "../../Services/api/empleadosapi";

const Empleados = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    id_empleado: '',
    nombre_empleado: '',
    apellido_empleado: '',
    identidad_empleado: '',
    telefono_empleado: '',
    correo_empleado: '',
    direccion_empleado: '',
    rol_id: ''
    });
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }

  const onEmpleadoListClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator('/TablaEmpleados');
  }

  const onSaveClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await newEmpleado(
      formValues.nombre_empleado,
      formValues.apellido_empleado,
      formValues.identidad_empleado,
      formValues.telefono_empleado,
      formValues.correo_empleado,
      formValues.direccion_empleado,
      formValues.rol_id,
      );
      console.log(data);
      Navigator('/empleados');
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <EmpleadosUx
      nombreValue = {formValues.nombre_empleado}
      apellidoValue = {formValues.apellido_empleado}
      identidadValue = {formValues.identidad_empleado}
      telefonoValue = {formValues.telefono_empleado}
      correoValue = {formValues.correo_empleado}
      direccionValue = {formValues.direccion_empleado}
      rolValue ={formValues.rol_id}
      onEmpleadoListClick = {onEmpleadoListClick}
      onChangeHandler={onChangeHandler}
      onSaveClick={onSaveClick}
    />
  );
}
export default Empleados;
