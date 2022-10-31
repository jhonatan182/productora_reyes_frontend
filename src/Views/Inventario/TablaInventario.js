import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import newProduct from '../../Services/api/inventarioapi';

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
  const [formValues, setFormValues] = useState({ 
    codigo_producto: '',
    nombre: '',
    descripcion: '',
    stock: '',
    precio_producto: '',
    proveedor_id: ''
});
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [productoSeleccionado, setProductoSeleccionado]=useState({
    codigo_producto: '',
    nombre: '',
    descripcion: '',
    stock: '',
    precio_producto: '',
    proveedor_id: ''
  })

  const handleChange= e =>{
    let { name, value } = e.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
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
        formValues.nombre,
        formValues.descripcion,
        formValues.stock,
        formValues.precio_producto,
        formValues.proveedor_id,
        );
        console.log(data);
        Navigator('/InventarioTable')
      } catch (ex) {
        console.log(ex);
      }
  }


  const seleccionarProducto=(artista, caso)=>{
    setProductoSeleccionado(artista);
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
    peticionGet();
  }, [])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Producto</h3>
      <TextField className={styles.inputMaterial} label="Producto" name="nombre" onChange={handleChange}/>
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

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar el producto<b>{productoSeleccionado && productoSeleccionado.codigo_producto}</b>? </p>
      <div align="right">
        <Button color="secondary">Sí</Button>
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
              icon: 'edit',
              tooltip: 'Editar Artista',
              onClick: (rowData) => seleccionarProducto(rowData, "Editar")
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar Artista',
              onClick: (rowData) => seleccionarProducto(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
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

    </div>
  );
}

export default GetData;