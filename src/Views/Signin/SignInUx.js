import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import Buttons from "../../Components/Buttons";
import Logo from '../../Components/Images/logo.png';

const SignInUx = ({
  idValue = "",
  sexoValue = "",
  direccionValue = "",
  numeroValue = "",
  dateValue = "",
  nameValue = "",
  emailValue = "",
  passwordValue = "",
  onChangeHandler = () => { },
  onSignInClick = () => { },
  onLoginClick = () => { }
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Proycomer"
    >
      <img src={Logo}/>
      <form style={{ minWidth: "380px", maxWidth: "640px"}}>
      <h1 style={{textAlign: "center"}}>Crea tu cuenta</h1>
       <Field
          name="id"
          labelText="Usuario"
          type="text"
          value={idValue}
          onChange={onChangeHandler}
        />
        <Field
          name="nombre"
          labelText="Contraseña"
          type="text"
          value={nameValue}
          onChange={onChangeHandler}
        />
        <Buttons>
        <button class="button button1" onClick={onSignInClick}>Crear Cuenta</button>
        <button class="button button2" onClick={onLoginClick}>¿Ya tienes cuenta? Inicia sesión</button>
        </Buttons>
      </form>
    </Page>
  );
}

export default SignInUx;
