import React from 'react'

import VisitantesCadastro from './VisitantesCadastro';
import './AgendarVisita.css';

function AgendarVisita(){


    const [qntVisitantes, setQntVisitantes] = React.useState(1);;
    const [arrayQntVisitantes, setArrauQntVisitantes] = React.useState([1]);

    const [dataVisita, setDataVisita] = React.useState("");
    const [horaVisita, setHoraVisita] = React.useState("");
  
    function selectHandleOnChange(e){
        setQntVisitantes(e.target.value)
        let arr = []
        for(var i=0; i < e.target.value; i++){
            arr.push(i+1);
        }

        setArrauQntVisitantes(arr);
    }

    function DataHandleOnChange(e){
        setDataVisita(e.target.value)
    }

    function HoraHandleOnChange(e){
        setHoraVisita(e.target.value)
    }

    function handleOnSubmit(e){
        e.preventDefault();
    }

    return (
        <div className='agendarVisita'>
            <div className='contentVisita'>
                <h1>AGENDE SUA VISITA!</h1>
                <div className="form">
                    <form method='post'>

                        <div className='date'>
                            <label htmlFor="date">Data</label>
                            <input type="date" onChange={DataHandleOnChange} placeholder=''/>
                        </div>
                        <div className='hour'>
                            <label htmlFor="date">Horário</label>
                            <select name="" id="" onChange={HoraHandleOnChange}>
                                <option selected disabled value="">Escolha um Horário</option>
                                <option value="07:00 as 12:00">07:00 as 12:00</option>
                                <option value="13:00 as 16:00">13:00 as 16:00</option>
                                <option value="16:00 as 20:00">16:00 as 20:00</option>
                            </select>

                        </div>

                        <div className='quantity'>
                            <label htmlFor="">Número de pessoas no grupo </label>
                            <select onChange={selectHandleOnChange} name="quantidade" title="Escolha a quantidade de pessoas no grupo" >
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>

                        <div className="space">
                            <div>
                                <h5>Data da visita: {dataVisita}</h5>
                                <h5>Hora da visita: {horaVisita}</h5>
                                <h5>Quantida de visitantes: {qntVisitantes}</h5>
                            </div>
                        </div>

                        <VisitantesCadastro arr={arrayQntVisitantes}/>

                        <div className="submit">
                            <button type='submit'>Confirmar Agendamento</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default AgendarVisita;