import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from './pages/Login.jsx';
import Admin from './pages/Admin';
import Formulario from "./pages/Formulario.jsx";
import EditarForm from "./pages/EditarForm.jsx";
import RotaProtegida from './components/RotaProtegida.jsx';
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<RotaProtegida><Admin /></RotaProtegida>} />
        <Route path="/admin/novo" element={<RotaProtegida><Formulario /></RotaProtegida>} />
        <Route path="/admin/editar/:id" element={<RotaProtegida><EditarForm /></RotaProtegida>} />
      </Routes>
    </BrowserRouter>
  );
}