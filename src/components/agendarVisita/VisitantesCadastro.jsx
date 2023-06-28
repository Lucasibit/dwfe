import Visitante from "./Visitante";

import "./VisitantesCadastro.css";

function VisitantesCadastro({ arr, handleOnChangePessoas, handleOnChange }) {

  return (
    <div className="formVisitantes">
      <div className="email">
        <label htmlFor="email">
          E-mail (para qual será enviado o comprovante)
        </label>
        <input type="email" placeholder="example@gmail.com" name="email" onChange={handleOnChange}/>
      </div>

      <div className="celular">
        <label htmlFor="celular">Número de Celular</label>
        <input type="number" placeholder="(00) 00000-0000" name="celular" onChange={handleOnChange}/>
      </div>

      {arr.length > 0 &&
        arr.map((visitante) => (
          <div className="pessoa">
            <h1>Pessoa {visitante}:</h1>
            {<Visitante key={visitante}  handleOnChange={(e) => handleOnChangePessoas(e, visitante-1)}/>}
          </div>
        ))}
    </div>
  );
}

export default VisitantesCadastro;
