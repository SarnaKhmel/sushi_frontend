import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/about" element={<AboutPage />} />
        <Route index path="/delivery" element={<HomePage />} />
        <Route index path="/politics" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
