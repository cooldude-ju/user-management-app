import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Users from "../pages/Users";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root URL to /login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Route */}
      <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
    </Routes>
  );
};

export default AppRoutes;
