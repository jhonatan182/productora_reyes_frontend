
import postLogin from '../../Services/api/loginapi';
import { setAuth } from '../../Services/api/axios';
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const LOGIN_JWT_SET = "LOGIN_JWT_SET";
const LOGIN_CLEAN_ERROR = "LOGIN_CLEAN_ERROR";

export const submitLogin = async (dispatch, usuario, password) => {
  try {
    dispatch({ type: LOGIN_LOADING, payload: null });
    const { data } = await postLogin(usuario, password);
    console.log(data)
    //localStorage.setItem('Nombre', data.nombre);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    //console.log(data);
    setAuth(data.token);
    dispatch({ type: LOGIN_JWT_SET, payload: null });
  } catch (ex) {
    console.log(ex);
    dispatch({ type: LOGIN_FAILED, payload: 'Las credenciales no son válidas' });
    throw Error("Credenciales no Válidas");
  }
}

export const cleanLoginError = (dispatch) => {
  dispatch({ type: LOGIN_CLEAN_ERROR, payload: null });
}
