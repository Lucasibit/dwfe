import "./VisitanteCadastroForm.css";

function VisitanteCadastroForm() {
  return (
    <div className="cadastroForm">
      <div >
        <div className="documentAndName">
          <div className="documentType">
            <label htmlFor="">Tipo Documento</label>
            <select name="" id="">
              <option value="">Escolha o tipo do documento</option>
              <option value="cpf">CPF</option>
              <option value="rg">RG</option>
            </select>
          </div>

          <div className="documentInput">
            <label htmlFor="">Documento</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="nameInput">
            <label htmlFor="">Nome</label>
            <input placeholder="Seu Nome" type="text" />
      </div>
      <div>
        <div className="typeTicket">
          <label htmlFor="typeTicket">Tipo do ingresso </label>
          <select name="" id="">
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

export default VisitanteCadastroForm;
