import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import Buttons from '../../Components/Buttons';
import ErrorField from "../../Components/ErrorField";
import Logo from '../../Components/Images/LogoProycomerCircular.png';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { submitLogin, cleanLoginError } from './LoginActions';


const LoginInUx = ({
  error = "",
  }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ usuario: '', password: '' });

  const onChangeHandler= e =>{
    setFormValues({
      ...formValues,
      [e.target.name] :e.target.value
    })
  }

  const onLoginClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await submitLogin(dispatch, formValues.usuario, formValues.password);
      navigate('/menu')
    } catch (ex) {
      console.log(ex);
    }
  }


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
          name="usuario"
          labelText="Usuario"
          type="text"
          value={formValues.usuario}
          onChange={onChangeHandler}
        />
        <Field
          name="password"
          labelText="Contraseña"
          type="password"
          value={formValues.password}
          onChange={onChangeHandler}
        />
        <Buttons>
          <button type="submit" className="buttonlogin button1" onClick={onLoginClick}>Iniciar Sesión</button>
        </Buttons>
        <div style={{textAlign: "center"}}>
        <Button>¿Olvidaste tu Contraseña?</Button>
        </div>
        {error && <ErrorField>{error}</ErrorField>}
      </form>
    </Page>
  );
}

export default LoginInUx;
