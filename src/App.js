import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/about" element={<HomePage />} />
        <Route index path="/delivery" element={<HomePage />} />
        <Route index path="/politics" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
