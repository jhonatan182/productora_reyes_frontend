import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Modal, TextField, Button, Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import newCliente from '../../Services/api/clientesapi';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import newCliente from '../../Services/api/clientesapi';

const columns= [
  { title: 'Nombre del Cliente', field: 'nombre_cliente' },
  { title: 'Apellido del Cliente', field: 'apellido_cliente' },
  { title: 'Identidad del Cliente', field: 'identidad_cliente' },
  { title: 'Telefono del Cliente', field: 'telefono_cliente' },
  { title: 'Correo del Cliente', field: 'correo_cliente' },
  { title: 'Direccion del Cliente', field: 'direccion_cliente'},
];
const baseUrl="http://localhost:4000/api/clientes/";


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
    id_cliente: '',
    nombre_cliente: '',
    apellido_cliente: '',
    identidad_cliente: '',
    telefono_cliente: '',
    correo_cliente: '',
    direccion_cliente: ''
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
        const data = await newCliente(
        formValues.nombre_cliente,
        formValues.apellido_cliente,
        formValues.identidad_cliente,
        formValues.telefono_cliente,
        formValues.correo_cliente,
        formValues.direccion_cliente
        );
        console.log(data);
        Navigator('/clientes')
      } catch (ex) {
        console.log(ex);
      }
  }

  const peticionPut = async () => {
    await axios.put(baseUrl + "editar-cliente/" + formValues.id_cliente, formValues)
    .then(response => {
      var dataNueva = data;
      dataNueva.map(cliente => {
        if (cliente.id_cliente === formValues.id_cliente){
          cliente.nombre_cliente=formValues.nombre_cliente;
          cliente.apellido_cliente=formValues.apellido_cliente;
          cliente.identidad_cliente=formValues.identidad_cliente;
          cliente.telefono_cliente=formValues.telefono_cliente;
          cliente.correo_cliente=formValues.correo_cliente;
          cliente.direccion_cliente=formValues.direccion_cliente;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error => {
      console.log(error)
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(baseUrl+"/eliminar-cliente/"+formValues.id_cliente)
    .then(response=>{
      setData(data.filter(cliente=>cliente.id_cliente!==formValues.id_cliente));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarCliente=(nombre, caso)=>{
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
    peticionGet();
  }, [])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Cliente</h3>
      <TextField className={styles.inputMaterial} label="Nombre del Cliente" name="nombre_cliente" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Apellido del Cliente" name="apellido_cliente" onChange={handleChange}/>          
      <br />
      <TextField className={styles.inputMaterial} label="Identidad del Cliente" name="identidad_cliente" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Telefono del Cliente" name="telefono_cliente" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Correo del Cliente" name="correo_cliente" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Direccion del Cliente" name="direccion_cliente" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Producto</h3>l
        <TextField className={styles.inputMaterial} label="Nombre del Cliente" name="nombre_cliente" onChange={handleChange} value={formValues&&formValues.nombre_cliente}/>
        <br />
        <TextField className={styles.inputMaterial} label="Apellido del Cliente" name="apellido_cliente" onChange={handleChange} value={formValues&&formValues.apellido_cliente}/>          
        <br />
        <TextField className={styles.inputMaterial} label="Identidad del Cliente" name="identidad_cliente" onChange={handleChange} value={formValues&&formValues.identidad_cliente}/>
        <br />
        <TextField className={styles.inputMaterial} label="Telefono del Cliente" name="telefono_cliente" onChange={handleChange} value={formValues&&formValues.telefono_cliente}/>
        <br />
        <TextField className={styles.inputMaterial} label="Correo del Cliente" name="correo_cliente" onChange={handleChange} value={formValues&&formValues.correo_cliente}/>
        <br />
        <TextField className={styles.inputMaterial} label="Direccion del Cliente" name="direccion_cliente" onChange={handleChange} value={formValues&&formValues.direccion_cliente}/>
        <br />
        <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar el cliente <b>{formValues && formValues.nombre_cliente}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={() => peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  )

  return (
    <div className="App">
      <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Agregar Cliente</Button>
      <br /><br />
     <MaterialTable
          columns={columns}
          data={data}
          title="Clientes"  
          actions={[
            {
              icon: Edit,
              tooltip: 'Editar Cliente',
              onClick: (event, rowData) => seleccionarCliente(rowData, "Editar")
            },
            {
              icon: Delete,
              tooltip: 'Eliminar Cliente',
              onClick: (event, rowData) => seleccionarCliente(rowData, "Eliminar")
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