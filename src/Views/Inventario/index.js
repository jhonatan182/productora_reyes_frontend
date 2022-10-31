import InventarioUx from "./InventarioUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newProduct from "../../Services/api/inventarioapi";

const Inventario = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ 
    id: '',
    nombre: '',
    descripcion: '',
    stock: '',
    precio_producto: '',
    proveedor_id: ''
    });
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }

  const onProductListClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator('/tablaInventario');
  }

  const onSaveClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await newProduct(
      formValues.nombre,
      formValues.descripcion,
      formValues.stock,
      formValues.precio_producto,
      formValues.proveedor_id,
      );
      console.log(data);
      Navigator('/inventario');
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <InventarioUx
      nameValue = {formValues.nombre}
      descValue = {formValues.descripcion}
      stockValue = {formValues.stock}
      priceValue = {formValues.precio_producto}
      providerValue = {formValues.proveedor_id}
      onProductListClick = {onProductListClick}
      onChangeHandler={onChangeHandler}
      onSaveClick={onSaveClick}
    />
  );
}
export default Inventario;
