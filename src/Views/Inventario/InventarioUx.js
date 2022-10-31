import Page from "../../Components/Page"
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";

function clean (){
  window.location.reload();
}

const InventarioUx = ({
    nameValue = "",
    descValue = "",
    stockValue = "",
    priceValue = "",
    providerValue = "",
    onProductListClick = () => {},
    onChangeHandler = () => { },
    onSaveClick = () => {}
  }) => {
    return (
      <Page
        showNavBar={true}
        useAbsoluteCenter={true}
        pageTitle="Pagina de Inventario"
      >
         <form style={{ minWidth: "380px", maxWidth: "640px"}}>
            <h1 style={{textAlign: "center"}}>Agregar Producto</h1>

        </form>
        <Field
          name="nombre"
          labelText="Nombre de Producto"
          type="text"
          value={nameValue}
          onChange={onChangeHandler}
        />
        <Field
          name="descripcion"
          labelText="Descripción de Producto"
          type="text"
          value={descValue}
          onChange={onChangeHandler}
        />
        <Field
          name="stock"
          labelText="Stock del Producto"
          type="text"
          value={stockValue}
          onChange={onChangeHandler}
        />
        <Field
          name="precio_producto"
          labelText="Precio de Producto"
          type="text"
          value={priceValue}
          onChange={onChangeHandler}
        />
        <Field
          name="proveedor_id"
          labelText="ID de Proveedor"
          type="text"
          value={providerValue}
          onChange={onChangeHandler}
        />
        <div style={{justifyContent: "center"}}>
        <Buttons>
          <button class="button button1" onClick={onSaveClick}>Ingresar Producto</button>
          <button class="button button1" onClick={onProductListClick}>Lista de Productos</button>
          <button class="button button1" onClick={clean}>Limpiar</button>
        </Buttons>
        </div>
      </Page>
    );
  }
  
  export default InventarioUx;
  
