import Page from "../../Components/Page"
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";

function clean (){
  window.location.reload();
}

const EmpleadosUx = ({
    nombreValue = "",
    apellidoValue = "",
    identidadValue = "",
    telefonoValue = "",
    correoValue = "",
    direccionValue = "",
    rolValue = "",
    onEmpleadoListClick = () => {},
    onChangeHandler = () => { },
    onSaveClick = () => {}
  }) => {
    return (
      <Page
        showNavBar={true}
        useAbsoluteCenter={true}
        pageTitle="Pagina de Empleados"
      >
         <form style={{ minWidth: "380px", maxWidth: "640px"}}>
            <h1 style={{textAlign: "center"}}>Agregar Empleado</h1>

        </form>
        <Field
          name="nombre_empleado"
          labelText="Nombre del empleado"
          type="text"
          value={nombreValue}
          onChange={onChangeHandler}
        />
        <Field
          name="apellido_empleado"
          labelText="Apellido del empleado"
          type="text"
          value={apellidoValue}
          onChange={onChangeHandler}
        />
        <Field
          name="identidad_empleado"
          labelText="Identidad del empleado"
          type="text"
          value={identidadValue}
          onChange={onChangeHandler}
        />
        <Field
          name="telefono_empleado"
          labelText="Telefono del empleado"
          type="text"
          value={telefonoValue}
          onChange={onChangeHandler}
        />
        <Field
          name="correo_empleado"
          labelText="Correo del empleado"
          type="text"
          value={correoValue}
          onChange={onChangeHandler}
        />
         <Field
          name="direccion_empleado"
          labelText="Direccion del empleado"
          type="text"
          value={direccionValue}
          onChange={onChangeHandler}
        />
         <Field
          name="rol_id"
          labelText="Codigo de Rol del Empleado"
          type="text"
          value={rolValue}
          onChange={onChangeHandler}
        />
        <div style={{justifyContent: "center"}}>
        <Buttons>
          <button class="button button1" onClick={onSaveClick}>Ingresar Empleado</button>
          <button class="button button1" onClick={onEmpleadoListClick}>Lista de Empleado</button>
          <button class="button button1" onClick={clean}>Limpiar</button>
        </Buttons>
        </div>
      </Page>
    );
  }
  
  export default EmpleadosUx;