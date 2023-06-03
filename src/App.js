import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import OrderPage from "./Pages/OrderPage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/delivery" element={<HomePage />} />
        <Route path="/politics" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
