import InventarioUx from "./ClientesUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newCliente from "../../Services/api/proveedoresapi";

const Proveedores = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    id_proveedor: '',
    nombre_proveedor: '',
    descripcion_proveedor: '',
    identidad_proveedor: '',
    telefono_proveedor: '',
    correo_proveedor: '',
    direccion_proveedor: ''
    });
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }

  const onProveedorListClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator('/TablaProveedores');
  }

  const onSaveClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await newProveedor(
      formValues.nombre_proveedor,
      formValues.descripcion_proveedor,
      formValues.identidad_proveedor,
      formValues.telefono_proveedor,
      formValues.correo_proveedor,
      formValues.direccion_proveedor,
      );
      console.log(data);
      Navigator('/proveedores');
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <ProveedoresUx
      nombreValue = {formValues.nombre_proveedor}
      descripcionValue = {formValues.descripcion_proveedor}
      identidadValue = {formValues.identidad_proveedor}
      telefonoValue = {formValues.telefono_proveedor}
      correoValue = {formValues.correo_proveedor}
      direccionValue = {formValues.direccion_proveedor}
      onProveedorListClick = {onProveedorListClick}
      onChangeHandler={onChangeHandler}
      onSaveClick={onSaveClick}
    />
  );
}
export default Proveedores;
