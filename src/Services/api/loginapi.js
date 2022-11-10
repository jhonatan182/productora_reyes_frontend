import { axiosPublic } from './axios';

const postLogin = (usuario, password) => {
  console.log("loginapi: ", { usuario, password });
  return axiosPublic.post(
    'usuarios/login',
    {
      usuario,
      password
    } ,{
      headers:{
        'Content-Type': 'application/json'
      }
    }
  )
};

export default postLogin;
