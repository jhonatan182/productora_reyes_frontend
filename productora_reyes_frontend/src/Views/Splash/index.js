import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Page from '../../Components/Page';
import { app_loaded, app_start_loading } from './SplashActions';
import { setAuth } from '../../Services/api/axios';
const h1SplashStyle = {
  width: "100%",
  backgroundColor: "#fff",
  textAlign: "center",
  padding: "1rem",
  boxShadow: "0px 3px 5px #bbb"
}

const Splash = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.security);
  useEffect(() => {
    app_start_loading(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (user.token) {
      setAuth(user.token);
    }
    app_loaded(dispatch);
  }, [user]);

  return (
    <Page
      useAbsoluteCenter={true}
      showNavBar={false}
    >
      <h1 style={h1SplashStyle}>Vaccination App <br /> v1.0.0</h1>
    </Page>
  )
}

export default Splash;
