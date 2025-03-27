import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { user } = useAuth();
  return (user && user.mbti)? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
