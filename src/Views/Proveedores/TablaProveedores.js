import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useNavigate } from 'react-router-dom';
import { Modal, TextField, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import newProveedor from '../../Services/api/proveedoresapi';
import { axiosPrivate } from '../../Services/api/axios';

const columns = [
    { title: 'Nombre', field: 'nombre_proveedor' },
    { title: 'Descripción', field: 'descripcion_proveedor' },
    { title: 'Identidad', field: 'identidad_proveedor' },
    { title: 'Telefono', field: 'telefono_proveedor' },
    { title: 'Correo', field: 'correo_proveedor' },
    { title: 'Dirección', field: 'direccion_proveedor' },
];

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
        transform: 'translate(-50%, -50%)',
    },
    iconos: {
        cursor: 'pointer',
    },
    inputMaterial: {
        width: '100%',
    },
}));

function GetProveedores() {
    const Navigator = useNavigate();
    const styles = useStyles();
    const [data, setData] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [formValues, setFormValues] = useState({
        id_proveedor: '',
        nombre_proveedor: '',
        descripcion_proveedor: '',
        identidad_proveedor: '',
        telefono_proveedor: '',
        correo_proveedor: '',
        direccion_proveedor: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevstate) => ({
            ...prevstate,
            [name]: value,
        }));
    };

    const peticionGet = async () => {
        await axiosPrivate
            .get(process.env.REACT_APP_API_HOST + '/proveedores/')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const peticionPost = async () => {
        try {
            const data = await newProveedor(
                formValues.nombre_proveedor,
                formValues.descripcion_proveedor,
                formValues.identidad_proveedor,
                formValues.telefono_proveedor,
                formValues.correo_proveedor,
                formValues.direccion_proveedor
            );
            abrirCerrarModalInsertar();
            window.location.reload();
            alert('Proveedor Insertado Correctamente');
        } catch (ex) {
            console.log(ex);
        }
    };

    const peticionPut = async () => {
        await axiosPrivate
            .put(
                process.env.REACT_APP_API_HOST +
                    '/proveedores/actualizar/' +
                    formValues.id_proveedor,
                formValues
            )
            .then((response) => {
                var dataNueva = data;
                dataNueva.map((proveedor) => {
                    if (proveedor.id_proveedor === formValues.id_proveedor) {
                        proveedor.nombre_proveedor =
                            formValues.nombre_proveedor;
                        proveedor.descripcion_proveedor =
                            formValues.descripcion_proveedor;
                        proveedor.identidad_proveedor =
                            formValues.identidad_proveedor;
                        proveedor.telefono_proveedor =
                            formValues.telefono_proveedor;
                        proveedor.correo_proveedor =
                            formValues.correo_proveedor;
                        proveedor.direccion_proveedor =
                            formValues.direccion_proveedor;
                    }
                });
                setData(dataNueva);
                abrirCerrarModalEditar();
                alert('Proveedor Editado Correctamente');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const peticionDelete = async () => {
        await axiosPrivate
            .delete(
                process.env.REACT_APP_API_HOST +
                    '/proveedores/eliminar/' +
                    formValues.id_proveedor
            )
            .then((response) => {
                setData(
                    data.filter(
                        (proveedor) =>
                            proveedor.id_proveedor !== formValues.id_proveedor
                    )
                );
                alert('Proveedor Eliminado Correctamente');
                abrirCerrarModalEliminar();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const seleccionarProveedor = (nombre, caso) => {
        setFormValues(nombre);
        caso === 'Editar'
            ? abrirCerrarModalEditar()
            : abrirCerrarModalEliminar();
    };

    const abrirCerrarModalInsertar = () => {
        setModalInsertar(!modalInsertar);
    };

    const abrirCerrarModalEditar = () => {
        setModalEditar(!modalEditar);
    };

    const abrirCerrarModalEliminar = () => {
        setModalEliminar(!modalEliminar);
    };

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (!auth) {
            Navigator('/login');
            return;
        }

        peticionGet();
    }, []);

    const bodyInsertar = (
        <div className={styles.modal}>
            <h3>Agregar Nuevo Proveedor</h3>
            <TextField
                className={styles.inputMaterial}
                label="Nombre del Proveedor"
                name="nombre_proveedor"
                onChange={handleChange}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Descripcion"
                name="descripcion_proveedor"
                onChange={handleChange}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Identidad"
                name="identidad_proveedor"
                onChange={handleChange}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Telefono"
                name="telefono_proveedor"
                onChange={handleChange}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Correo del Proveedor"
                name="correo_proveedor"
                onChange={handleChange}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Direccion Proveedor"
                name="direccion_proveedor"
                onChange={handleChange}
            />
            <br />
            <br />
            <div align="right">
                <Button color="primary" onClick={() => peticionPost()}>
                    Insertar
                </Button>
                <Button onClick={() => abrirCerrarModalInsertar()}>
                    Cancelar
                </Button>
            </div>
        </div>
    );

    const bodyEditar = (
        <div className={styles.modal}>
            <h3>Editar Proveedor</h3>
            <TextField
                className={styles.inputMaterial}
                label="Nombre de Proveedor"
                name="nombre_proveedor"
                onChange={handleChange}
                value={formValues && formValues.nombre_proveedor}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Descripción"
                name="descripcion_proveedor"
                onChange={handleChange}
                value={formValues && formValues.descripcion_proveedor}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Identidad"
                name="identidad_proveedor"
                onChange={handleChange}
                value={formValues && formValues.identidad_proveedor}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Telefono del Proveedor"
                name="telefono_proveedor"
                onChange={handleChange}
                value={formValues && formValues.telefono_proveedor}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Correo del Proveedor"
                name="correo_proveedor"
                onChange={handleChange}
                value={formValues && formValues.correo_proveedor}
            />
            <br />
            <TextField
                className={styles.inputMaterial}
                label="Direccion Proveedor"
                name="direccion_proveedor"
                onChange={handleChange}
                value={formValues && formValues.direccion_proveedor}
            />
            <br />
            <br />
            <div align="right">
                <Button color="Info" onClick={() => peticionPut()}>
                    Editar
                </Button>
                <Button onClick={() => abrirCerrarModalEditar()}>
                    Cancelar
                </Button>
            </div>
        </div>
    );

    const bodyEliminar = (
        <div className={styles.modal}>
            <p>
                Estás seguro que deseas eliminar el proveedor{' '}
                <b>{formValues && formValues.nombre_proveedor}</b>?{' '}
            </p>
            <div align="right">
                <Button color="secondary" onClick={() => peticionDelete()}>
                    Sí
                </Button>
                <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
            </div>
        </div>
    );

    return (
        <div className="App">
            <br />
            <Button
                style={{ backgroundColor: '#ff4e4a', color: 'white' }}
                onClick={() => abrirCerrarModalInsertar()}
            >
                Agregar Proveedor
            </Button>
            <br />
            <br />
            <MaterialTable
                columns={columns}
                data={data}
                title="Proveedores"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar Proveedor',
                        onClick: (event, rowData) =>
                            seleccionarProveedor(rowData, 'Editar'),
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Proveedor',
                        onClick: (event, rowData) =>
                            seleccionarProveedor(rowData, 'Eliminar'),
                    },
                ]}
                options={{
                    actionsColumnIndex: -1,
                    search: 'search',
                }}
                localization={{
                    header: {
                        actions: 'Acciones',
                    },
                }}
            />
            <Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>
                {bodyInsertar}
            </Modal>

            <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
                {bodyEditar}
            </Modal>

            <Modal open={modalEliminar} onClose={abrirCerrarModalEditar}>
                {bodyEliminar}
            </Modal>
        </div>
    );
}

export default GetProveedores;
