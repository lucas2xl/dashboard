import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { List } from "../pages/list/List";
import { Login } from "../pages/login/Login";
import { Main } from "../pages/main/Main";
import { NewProduct } from "../pages/new/NewProduct";
import { NewUser } from "../pages/new/NewUser";
import { Single } from "../pages/single/Single";

export const PublicRoutes = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/users" element={<List />} />
        <Route path="/users/:userId" element={<Single />} />
        <Route path="/users/new" element={<NewUser />} />

        <Route path="/products" element={<List />} />
        <Route path="/products/:productId" element={<Single />} />
        <Route path="/products/new" element={<NewProduct />} />
      </Routes>
    </Main>
  );
};
