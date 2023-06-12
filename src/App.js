import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductPage from "./Pages/ProductPage";
import ErrorPage from "./Pages/ErrorPage";
import { Routes, Route } from "react-router";

import RegisterPage from "./Admin/Pages/RegisterPage";
import LoginAdmin from "./Admin/Login/LoginAdmin";
// import OrderPageA from "./Admin/Pages/OrderPageA";
import HomeAdminPage from "./Admin/Pages/HomeAdminPage";
import AdminProductsPage from "./Admin/Pages/AdminProductsPage";
import AdminUserPage from "./Admin/Pages/AdminUserPage";
import AdminProductEditPage from "./Admin/Pages/AdminProductEditPage";
import PostPage from "./Pages/PostPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/delivery" element={<HomePage />} />
        <Route path="/politics" element={<HomePage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/post/:id" element={<PostPage />} />

        {/* Admins routes */}
        <Route path="/admin/register" element={<RegisterPage />} />
        <Route path="/admin/login" element={<LoginAdmin />} />

        <Route path="/admin/home" element={<HomeAdminPage />} />
        {/* <Route path="/admin/admins" element={<RegisterPage />} /> */}
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route path="/admin/products/:id" element={<AdminProductEditPage />} />
        <Route path="/admin/posts" element={<RegisterPage />} />
        <Route path="/admin/orders" element={<RegisterPage />} />
        {/* <Route path="/admin/statistics" element={<RegisterPage />} /> */}
        <Route path="/admin/me" element={<AdminUserPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
