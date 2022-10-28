import axios from 'axios';

const axiosPublic = axios.create();
const axiosPrivate = axios.create();

axiosPublic.defaults.baseURL = process.env.REACT_APP_API_HOST
axiosPrivate.defaults.baseURL = process.env.REACT_APP_API_HOST

axiosPublic.defaults.headers.common['apikey'] = process.env.REACT_APP_API_TOKEN;
axiosPrivate.defaults.headers.common['apikey'] = process.env.REACT_APP_API_TOKEN;

axiosPublic.defaults.headers.common['cache-control'] = 'no-cache';
axiosPrivate.defaults.headers.common['cache-control'] = 'no-cache';

axiosPublic.defaults.headers.common['Content-Type'] = 'application/json';
axiosPrivate.defaults.headers.common['Content-Type'] = 'application/json';

const setAuth = (jwt) => {
  axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}

export {
  axiosPublic,
  axiosPrivate,
  setAuth
}