import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoute = () => {
  const { loggedIn } = useAuthStatus();

  return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
