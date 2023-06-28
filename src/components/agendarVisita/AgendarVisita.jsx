import React, { useEffect, useState } from 'react'

import VisitantesCadastro from './VisitantesCadastro';
import './AgendarVisita.css';
import axios from 'axios';

import useAuth from '../../hooks/useAuth';

function AgendarVisita(){


    const [qntVisitantes, setQntVisitantes] = React.useState(1);;
    const [arrayQntVisitantes, setArrauQntVisitantes] = React.useState([1]);

    const [cadastro, setCadastro] = React.useState({data:"", horario: "", pessoas:[], email:"", celular:""})

    const {user} = useAuth();


    function selectHandleOnChange(e){
        setQntVisitantes(e.target.value)
        let arr = []
        for(var i=0; i < e.target.value; i++){
            arr.push(i+1);
        }

        setArrauQntVisitantes(arr);
        setCadastro((prevState) => ({...prevState, [e.target.name] : e.target.value}))
        console.log(cadastro)
    }

    function handleOnChange(e){
        const {name, value} = e.target;
        setCadastro((prevState) => ({...prevState, [name] : value}))
        console.log(cadastro)

    }
    function handleOnChangePessoas(e, index){
        const novasPessoas = [...cadastro.pessoas];
        novasPessoas[index] = {
            ...novasPessoas[index],
            [e.target.name]: e.target.value
        }
        setCadastro((prevState) => ({...prevState, pessoas:novasPessoas}));
        console.log(cadastro);
    }

    function handleOnSubmit(e){
        cadastro.idUsuario = user.id;
        axios.post('http://localhost:3000/visitas', cadastro)
        .then(res => {
            console.log(res)
            if(res.status === 201){
                alert("Visita Agendada")
            }else{
                alert("Não foi possivel agendar a visita")
            }
        })
        .catch(err => {
            alert("Ocorreu um problema ")
        })
        e.preventDefault();
    }

    return (
        <div className='agendarVisita'>
            <div className='contentVisita'>
                <h1>Agende sua Visita!</h1>
                <div className="form">
                    <form method='post' onSubmit={handleOnSubmit}>

                        <div className='date'>
                            <label htmlFor="date">Data</label>
                            <input type="date" name="data" onChange={handleOnChange} placeholder=''/>
                        </div>
                        <div className='hour'>
                            <label htmlFor="horario">Horário</label>
                            <select name="horario" onChange={handleOnChange} id="">
                                <option selected disabled value="">Escolha um Horário</option>
                                <option value="07:00 as 12:00">07:00 as 12:00</option>
                                <option value="13:00 as 16:00">13:00 as 16:00</option>
                                <option value="16:00 as 20:00">16:00 as 20:00</option>
                            </select>

                        </div>

                        <div className='quantity'>
                            <label htmlFor="">Número de pessoas no grupo </label>
                            <select onChange={selectHandleOnChange} name="quantidade"
                             title="Escolha a quantidade de pessoas no grupo" >
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

                        <div className="space" style={{backgroundColor: 'transparent', height:"0.5rem"}}>
                            <hr />
                        </div>

                        <VisitantesCadastro arr={arrayQntVisitantes} handleOnChange={handleOnChange} handleOnChangePessoas={handleOnChangePessoas}/>

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