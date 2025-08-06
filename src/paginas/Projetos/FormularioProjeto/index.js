import { useState } from "react";
import Cabecalho from "../../../componentes/Cabecalho";
import Rodape from "../../../componentes/Rodape";

function FormularioProjeto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [responsavel, setResponsavel] = useState("");

  return (
    <>
      <Cabecalho />
      <section className="container mt-3" id="novo-projeto">
        <h1>Dados do Projeto</h1>
        <form className="row g-3" onSubmit={() => {}}>
          <div className="col-md-12">
            <lable htmlFor="nome" className="form-label">
              Nome
            </lable>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Digite o nome do projeto"
              defaultValue={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <lable htmlFor="descricao" className="form-label">
              Descrição
            </lable>
            <textarea
              className="form-control"
              id="descricao"
              placeholder="Descreva o projeto"
              defaultValue={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="responsavel" className="form-label">
              Responsável
            </label>
            <select
              id="responsavel"
              className="form-select"
              defaultValue={responsavel}
              onChange={(e) => setResponsavel(e.target.value)}
              required
            >
              <option disabled value="">
                Escolha um usuário...
              </option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
            <button className="btn btn-outline-primary ms-2" onClick={() => {}}>
              Cancelar
            </button>
          </div>
        </form>
      </section>
      <Rodape />
    </>
  );
}

export default FormularioProjeto;
