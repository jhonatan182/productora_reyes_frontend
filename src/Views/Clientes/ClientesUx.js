import Page from "../../Components/Page"
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";

function clean (){
  window.location.reload();
}

const ClientesUx = ({
    nombreValue = "",
    apellidoValue = "",
    identidadValue = "",
    telefonoValue = "",
    correoValue = "",
    direccionValue = "",
    onClienteListClick = () => {},
    onChangeHandler = () => { },
    onSaveClick = () => {}
  }) => {
    return (
      <Page
        showNavBar={true}
        useAbsoluteCenter={true}
        pageTitle="Pagina de Clientes"
      >
         <form style={{ minWidth: "380px", maxWidth: "640px"}}>
            <h1 style={{textAlign: "center"}}>Agregar Clientes</h1>

        </form>
        <Field
          name="nombre_cliente"
          labelText="Nombre del Cliente"
          type="text"
          value={nombreValue}
          onChange={onChangeHandler}
        />
        <Field
          name="apellido_cliente"
          labelText="Apellido del Cliente"
          type="text"
          value={apellidoValue}
          onChange={onChangeHandler}
        />
        <Field
          name="identidad_cliente"
          labelText="Identidad del Cliente"
          type="text"
          value={identidadValue}
          onChange={onChangeHandler}
        />
        <Field
          name="telefono_cliente"
          labelText="Telefono del Cliente"
          type="text"
          value={telefonoValue}
          onChange={onChangeHandler}
        />
        <Field
          name="correo_cliente"
          labelText="Correo del Cliente"
          type="text"
          value={correoValue}
          onChange={onChangeHandler}
        />
         <Field
          name="direccion_cliente"
          labelText="Direccion del Cliente"
          type="text"
          value={direccionValue}
          onChange={onChangeHandler}
        />
        <div style={{justifyContent: "center"}}>
        <Buttons>
          <button class="button button1" onClick={onSaveClick}>Ingresar Cliente</button>
          <button class="button button1" onClick={onClienteListClick}>Lista de Clientes</button>
          <button class="button button1" onClick={clean}>Limpiar</button>
        </Buttons>
        </div>
      </Page>
    );
  }
  
  export default ClientesUx;