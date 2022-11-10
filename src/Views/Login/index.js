import LoginInUx from "./LoginUX";;
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
  const Navigator = useNavigate();

  const { isLoading, error } = useSelector(state => state.security);


  const password = () => {
    Navigator('/password');
  }

  return (
    <LoginInUx
      isLoading={isLoading}
      error={error}
    />
  );
}

export default Login;
