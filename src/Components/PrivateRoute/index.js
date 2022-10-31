import { useSelector } from "react-redux";
import jwtDecode from 'jwt-decode';
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.security);
  if (user) {
    try {
      const { token } = user;
      const decoded = jwtDecode(token);
      const expired = (decoded.exp * 1000) < (new Date().getTime());
      if (expired) {
        return <Navigate to="/login" replace />
      }
    } catch (ex) {
      return <Navigate to="/login" replace />
    }
  } else {
    return <Navigate to="/login" replace />
  }
  return children ? children : <Outlet />;
}

export default PrivateRoute;
