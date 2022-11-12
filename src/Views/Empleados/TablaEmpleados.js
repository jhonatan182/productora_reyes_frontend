import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import { axiosPrivate } from '../../Services/api/axios';
import { useNavigate } from 'react-router-dom';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import newEmpleado from '../../Services/api/empleadosapi';

const columns= [
  { title: 'Nombre del empleado', field: 'nombre_empleado' },
  { title: 'Apellido del empleado', field: 'apellido_empleado' },
  { title: 'Identidad del empleado', field: 'identidad_empleado' },
  { title: 'Telefono del empleado', field: 'telefono_empleado' },
  { title: 'Correo del empleado', field: 'correo_empleado' },
  { title: 'Direccion del empleado', field: 'direccion_empleado'},
  {title: 'Codigo de Rol del Empleado', field: 'rol_id'},
];
const baseUrl="http://localhost:4000/api/empleados/";


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

function GetEmpleados() {
const Navigator = useNavigate();
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
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
        const data = await newEmpleado(
        formValues.nombre_empleado,
        formValues.apellido_empleado,
        formValues.identidad_empleado,
        formValues.telefono_empleado,
        formValues.correo_empleado,
        formValues.direccion_empleado,
        formValues.rol_id
        );
        console.log(data);
        Navigator('/empleados')
      } catch (ex) {
        console.log(ex);
      }
  }

  const peticionPut = async () => {
    await axiosPrivate.put(baseUrl + "editar-empleado/" + formValues.id_empleado, formValues)
    .then(response => {
      var dataNueva = data;
      dataNueva.map(empleado => {
        if (empleado.id_empleado === formValues.id_empleado){
          empleado.nombre_empleado=formValues.nombre_empleado;
          empleado.apellido_empleado=formValues.apellido_empleado;
          empleado.identidad_empleado=formValues.identidad_empleado;
          empleado.telefono_empleado=formValues.telefono_empleado;
          empleado.correo_empleado=formValues.correo_empleado;
          empleado.direccion_empleado=formValues.direccion_empleado;
          empleado.rol_id=formValues.rol_id;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error => {
      console.log(error)
    })
  }

  const peticionDelete=async()=>{
    await axiosPrivate.delete(baseUrl+"/eliminar-empleado/"+formValues.id_empleado)
    .then(response=>{
      setData(data.filter(empleado=>empleado.id_empleado!==formValues.id_empleado));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarEmpleado=(nombre, caso)=>{
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
      <h3>Agregar Nuevo Empleado</h3>
      <TextField className={styles.inputMaterial} label="Nombre del empleado" name="nombre_empleado" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Apellido del empleado" name="apellido_empleado" onChange={handleChange}/>          
      <br />
      <TextField className={styles.inputMaterial} label="Identidad del empleado" name="identidad_empleado" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Telefono del empleado" name="telefono_empleado" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Correo del empleado" name="correo_empleado" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Direccion del empleado" name="direccion_empleado" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Codido de Rol del Empleado" name="rol_id" onChange={handleChange}/>
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
        <TextField className={styles.inputMaterial} label="Nombre del empleado" name="nombre_empleado" onChange={handleChange} value={formValues&&formValues.nombre_empleado}/>
        <br />
        <TextField className={styles.inputMaterial} label="Apellido del empleado" name="apellido_empleado" onChange={handleChange} value={formValues&&formValues.empleado}/>          
        <br />
        <TextField className={styles.inputMaterial} label="Identidad del empleado" name="identidad_empleado" onChange={handleChange} value={formValues&&formValues.identidad_empleado}/>
        <br />
        <TextField className={styles.inputMaterial} label="Telefono del empleado" name="telefono_empleado" onChange={handleChange} value={formValues&&formValues.telefono_empleado}/>
        <br />
        <TextField className={styles.inputMaterial} label="Correo del empleado" name="correo_empleado" onChange={handleChange} value={formValues&&formValues.correo_empleado}/>
        <br />
        <TextField className={styles.inputMaterial} label="Direccion del empleado" name="direccion_empleado" onChange={handleChange} value={formValues&&formValues.direccion_empleado}/>
        <br />
        <TextField className={styles.inputMaterial} label="Codigo de Rol del Empleado" name="rol_id" onChange={handleChange} value={formValues&&formValues.rol_id}/>
        <br /><br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar el empleado<b>{formValues && formValues.nombre_empleado}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={() => peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  )

  return (
    <div className="App">
      <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Agregar Empleado</Button>
      <br /><br />
     <MaterialTable
          columns={columns}
          data={data}
          title="Empleados"  
          actions={[
            {
              icon: Edit,
              tooltip: 'Editar Empleado',
              onClick: (event, rowData) => seleccionarEmpleado(rowData, "Editar")
            },
            {
              icon: Delete,
              tooltip: 'Eliminar Empleado',
              onClick: (event, rowData) => seleccionarEmpleado(rowData, "Eliminar")
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

export default GetEmpleados;