import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/Login";
import Usuarios from "./paginas/Usuarios";
import FormularioUsuario from "./paginas/Usuarios/FormularioUsuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/novo" element={<FormularioUsuario />} />
        <Route path="/usuarios/:id" element={<FormularioUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
