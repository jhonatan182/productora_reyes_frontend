import InventarioUx from "./ClientesUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newCliente from "../../Services/api/clientesapi";

const Clientes = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    id_cliente: '',
    nombre_cliente: '',
    apellido_cliente: '',
    identidad_cliente: '',
    telefono_cliente: '',
    correo_cliente: '',
    direccion_cliente: ''
    });
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }

  const onClienteListClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator('/TablaClientes');
  }

  const onSaveClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await newCliente(
      formValues. nombre_cliente,
      formValues.apellido_cliente,
      formValues.identidad_cliente,
      formValues.telefono_cliente,
      formValues.correo_cliente,
      formValues.direccion_cliente,
      );
      console.log(data);
      Navigator('/clientes');
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <ClientesUx
      nombreValue = {formValues.nombre_cliente}
      apellidoValue = {formValues.apellido_cliente}
      identidadValue = {formValues.identidad_cliente}
      telefonoValue = {formValues.telefono_cliente}
      correoValue = {formValues.correo_cliente}
      direccionValue = {formValues.direccion_cliente}
      onClienteListClick = {onClienteListClick}
      onChangeHandler={onChangeHandler}
      onSaveClick={onSaveClick}
    />
  );
}
export default Clientes;
