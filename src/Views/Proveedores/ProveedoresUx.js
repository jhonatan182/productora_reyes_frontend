import Page from "../../Components/Page"
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";

function clean (){
  window.location.reload();
}

const ProveedoresUx = ({
    nombreValue = "",
    descripcionValue = "",
    identidadValue = "",
    telefonoValue = "",
    correoValue = "",
    direccionValue = "",
    onProveedorListClick = () => {},
    onChangeHandler = () => { },
    onSaveClick = () => {}
  }) => {
    return (
      <Page
        showNavBar={true}
        useAbsoluteCenter={true}
        pageTitle="Pagina de Proveedores"
      >
         <form style={{ minWidth: "380px", maxWidth: "640px"}}>
            <h1 style={{textAlign: "center"}}>Agregar Proveedores</h1>

        </form>
        <Field
          name="nombre_proveedor"
          labelText="Nombre del proveedor"
          type="text"
          value={nombreValue}
          onChange={onChangeHandler}
        />
        <Field
          name="descripcion_proveedor"
          labelText="descripcion del proveedor"
          type="text"
          value={descripcionValue}
          onChange={onChangeHandler}
        />
        <Field
          name="identidad_proveedor"
          labelText="Identidad del proveedores"
          type="text"
          value={identidadValue}
          onChange={onChangeHandler}
        />
        <Field
          name="telefono_proveedor"
          labelText="Telefono del proveedores"
          type="text"
          value={telefonoValue}
          onChange={onChangeHandler}
        />
        <Field
          name="correo_proveedor"
          labelText="Correo del proveedores"
          type="text"
          value={correoValue}
          onChange={onChangeHandler}
        />
         <Field
          name="direccion_proveedor"
          labelText="Direccion del proveedores"
          type="text"
          value={direccionValue}
          onChange={onChangeHandler}
        />
        <div style={{justifyContent: "center"}}>
        <Buttons>
          <button class="button button1" onClick={onSaveClick}>Ingresar proveedores</button>
          <button class="button button1" onClick={onProveedorListClick}>Lista de proveedores</button>
          <button class="button button1" onClick={clean}>Limpiar</button>
        </Buttons>
        </div>
      </Page>
    );
  }
  
  export default ProveedoresUx;