import VisitanteCadastroForm from "./VisitanteCadastroForm";

import "./VisitantesCadastro.css";

function VisitantesCadastro({ arr }) {
  return (
    <div className="formVisitantes">
      <div className="email">
        <label htmlFor="email">
          E-mail (para qual será enviado o comprovante)
        </label>
        <input type="email" placeholder="example@gmail.com"/>
      </div>

      <div className="celular">
        <label htmlFor="celular">Número de Celular</label>
        <input type="number" placeholder="(00) 00000-0000"/>
      </div>

      {arr.length > 0 &&
        arr.map((visitante) => (
          <div className="pessoa">
            <h1>Pessoa {visitante}:</h1>
            {<VisitanteCadastroForm />}
          </div>
        ))}
    </div>
  );
}

export default VisitantesCadastro;
