import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductPage from "./Pages/ProductPage";
import ErrorPage from "./Pages/ErrorPage";
import { Routes, Route } from "react-router";

import RegisterPage from "./Admin/Pages/RegisterPage";
import LoginAdmin from "./Admin/Login/LoginAdmin";
// import OrderPageA from "./Admin/Pages/OrderPageA";
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

        {/* Admins routes */}
        <Route path="/admin/register" element={<RegisterPage />} />
        <Route path="/admin/login" element={<LoginAdmin />} />

        <Route path="/admin/admins" element={<RegisterPage />} />
        <Route path="/admin/products" element={<RegisterPage />} />
        <Route path="/admin/posts" element={<RegisterPage />} />
        <Route path="/admin/orders" element={<RegisterPage />} />
        <Route path="/admin/statistics" element={<RegisterPage />} />
        <Route path="/admin/me" element={<RegisterPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
