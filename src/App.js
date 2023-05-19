import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<Home />} />
        <Route index path="/delivery" element={<Home />} />
        <Route index path="/politics" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
