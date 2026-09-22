import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from './pages/Login.jsx';
import Admin from './pages/Admin';
import Formulario from "./pages/Formulario.jsx";
import EditarForm from "./pages/EditarForm.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/novo" element={<Formulario />} />
        <Route path="/admin/editar/:id" element={<EditarForm />} />
      </Routes>
    </BrowserRouter>
  );
}