import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/Login";
import Usuarios from "./paginas/Usuarios";
import FormularioUsuario from "./paginas/Usuarios/FormularioUsuario";
import Erro404 from "./paginas/Erro404";
import Projetos from "./paginas/Projetos";
import FormularioProjeto from "./paginas/Projetos/FormularioProjeto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/novo" element={<FormularioUsuario />} />
        <Route path="/usuarios/:id" element={<FormularioUsuario />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/novo" element={<FormularioProjeto />} />
        <Route path="/projetos/:id" element={<FormularioProjeto />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
