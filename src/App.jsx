import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HireService from "./pages/HireService.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire-service" element={<HireService />} />
      </Routes>
      <FloatingButtons />
    </>
  );
}