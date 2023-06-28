import "./Visitante.css";

function Visitante({handleOnChange}) {
  return (
    <div className="cadastroForm">
      <div className="inputs">
        <div className="documentAndName">
          <div className="documentType">
            <label htmlFor="tipoDocumento">Tipo Documento</label>
            <select name="tipoDocumento" onChange={handleOnChange}>
              <option selected disabled value="">Escolha o tipo do documento</option>
              <option value="cpf">CPF</option>
              <option value="rg">RG</option>
            </select>
          </div>

          <div className="documento">
            <label htmlFor="documento">Documento</label>
            <input type="text" name="documentInput"  onChange={handleOnChange}/>
          </div>
        </div>
      </div>
      <div className="nome">
            <label htmlFor="nameInput">Nome</label>
            <input placeholder="Seu Nome" name="nome" type="text"  onChange={handleOnChange} />
      </div>
      <div>
        <div className="typeTicket">
          <label htmlFor="typeTicket">Tipo do ingresso </label>
          <select name="tipoIngresso" id="" onChange={handleOnChange}>
            <option selected disabled value="">
              Escolha o tipo do ingresso
            </option>
            <option value="inteira">Inteira</option>
            <option value="meia">Meia Entrada</option>
            <option value="isento">Isento</option>
            <option value="condutores">Condutores ou Guias Cadastrados</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Visitante;
