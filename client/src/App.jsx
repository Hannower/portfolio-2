import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from './pages/Login.jsx';
import Admin from './pages/Admin';
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}