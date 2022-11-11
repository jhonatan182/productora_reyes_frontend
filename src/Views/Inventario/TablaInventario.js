import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import { useNavigate } from 'react-router-dom';
import {Modal, TextField, Button} from '@material-ui/core';
import { axiosPrivate } from '../../Services/api/axios';
import {makeStyles} from '@material-ui/core/styles';
import newProduct from '../../Services/api/inventarioapi';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import { Search } from '@material-ui/icons';

const columns= [
  { title: 'Producto', field: 'producto' },
  { title: 'Descripcion', field: 'descripcion' },
  { title: 'Stock', field: 'stock' },
  { title: 'Precio Producto', field: 'precio_producto' },
  { title: 'ID Proveedor', field: 'proveedor_id' },
];
const baseUrl="http://localhost:4000/api/productos/";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function GetData() {
const Navigator = useNavigate();
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [formValues, setFormValues] = useState({ 
    codigo_producto: '',
    producto: '',
    descripcion: '',
    stock: '',
    precio_producto: '',
    proveedor_id: ''
});

  const handleChange= e =>{
    const { name, value } = e.target;
    setFormValues(prevstate => ({
      ...prevstate,
      [name]: value
    }))
    console.log(formValues);
  }

  const peticionGet=async()=>{
    await axiosPrivate.get(baseUrl)
    .then(response=>{
     setData(response.data);
     console.log(response.data)
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPost = async () => {
    try {
        const data = await newProduct(
        formValues.producto,
        formValues.descripcion,
        formValues.stock,
        formValues.precio_producto,
        formValues.proveedor_id,
        );
        console.log(data);
        Navigator('/productos')
      } catch (ex) {
        console.log(ex);
      }
  }

  const peticionPut = async () => {
    await axiosPrivate.put(baseUrl + "editar-producto/" + formValues.codigo_producto, formValues)
    .then(response => {
      var dataNueva = data;
      dataNueva.map(producto => {
        if (producto.codigo_producto === formValues.codigo_producto){
          producto.producto=formValues.producto;
          producto.descripcion=formValues.descripcion;
          producto.stock=formValues.stock;
          producto.precio_producto=formValues.precio_producto;
          producto.proveedor_id=formValues.proveedor_id;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error => {
      console.log(error)
    })
  }

  const peticionDelete=async()=>{
    await axiosPrivate.delete(baseUrl+"/eliminar-producto/"+formValues.codigo_producto)
    .then(response=>{
      setData(data.filter(producto=>producto.codigo_producto!==formValues.codigo_producto));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarProducto=(nombre, caso)=>{
    setFormValues(nombre);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    const auth =
      JSON.parse(localStorage.getItem('auth'))
      if(!auth)Navigator('/login')
    peticionGet();
  }, [])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Producto</h3>
      <TextField className={styles.inputMaterial} label="Producto" name="producto" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Descripción" name="descripcion" onChange={handleChange}/>          
      <br />
      <TextField className={styles.inputMaterial} label="Stock" name="stock" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Precio Producto" name="precio_producto" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="ID Proveedor" name="proveedor_id" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Producto</h3>
        <TextField className={styles.inputMaterial} label="Producto" name="producto" onChange={handleChange} value={formValues&&formValues.producto}/>
        <br />
        <TextField className={styles.inputMaterial} label="Descripcion" name="descripcion" onChange={handleChange} value={formValues&&formValues.descripcion}/>          
        <br />
        <TextField className={styles.inputMaterial} label="Stock" name="stock" onChange={handleChange} value={formValues&&formValues.stock}/>
        <br />
        <TextField className={styles.inputMaterial} label="Precio Producto" name="precio_producto" onChange={handleChange} value={formValues&&formValues.precio_producto}/>
        <br />
        <TextField className={styles.inputMaterial} label="ID Proveedor" name="proveedor_id" onChange={handleChange} value={formValues&&formValues.proveedor_id}/>
        <br /><br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar el producto <b>{formValues && formValues.producto}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={() => peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  )

  return (
    <div className="App">
      <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Agregar Producto</Button>
      <br /><br />
     <MaterialTable
          columns={columns}
          data={data}
          title="Inventario"  
          actions={[
            {
              icon: Edit,
              tooltip: 'Editar Producto',
              onClick: (event, rowData) => seleccionarProducto(rowData, "Editar")
            },
            {
              icon: Delete,
              tooltip: 'Eliminar Producto',
              onClick: (event, rowData) => seleccionarProducto(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
            search: Search,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />
        <Modal
           open={modalInsertar}
           onClose={abrirCerrarModalInsertar}>
           {bodyInsertar}
        </Modal>

        <Modal
          open={modalEditar}
          onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

        <Modal
          open={modalEliminar}
          onClose={abrirCerrarModalEditar}>
          {bodyEliminar}
        </Modal>
    </div>
  );
}

export default GetData;