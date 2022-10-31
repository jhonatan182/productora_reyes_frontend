import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import Buttons from '../../Components/Buttons';
import ErrorField from "../../Components/ErrorField";
import Logo from '../../Components/Images/logo.png';
import Button from '@mui/material/Button';

const LoginInUx = ({
  emailValue = "",
  passwordValue = "",
  error = "",
  onChangeHandler = () => { },
  onSignInClick = () => { },
  onLoginClick = () => { },
  password = () => {}
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Proycomer"
    >
      <img src={Logo} alt=""/>
      <form style={{ minWidth: "380px", maxWidth: "640px" }}>
        <h1 style={{textAlign: "center"}}>Iniciar sesión</h1>
        <Field
          name="email"
          labelText="Usuario"
          type="email"
          value={emailValue}
          onChange={onChangeHandler}
        />
        <Field
          name="password"
          labelText="Contraseña"
          type="password"
          value={passwordValue}
          onChange={onChangeHandler}
        />
        <Buttons>
          <button className="button button1" onClick={onLoginClick}>Iniciar Sesión</button>
          <button className="button button2" onClick={onSignInClick}>¿No tienes cuenta? Crea una</button>
        </Buttons>
        <div style={{textAlign: "center"}}>
        <Button onClick={password}>¿Olvidaste tu Contraseña?</Button>
        </div>
        {error && <ErrorField>{error}</ErrorField>}
      </form>
    </Page>
  );
}

export default LoginInUx;
