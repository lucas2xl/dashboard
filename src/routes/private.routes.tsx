import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/Login";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
