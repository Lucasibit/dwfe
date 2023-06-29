import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";

function Agendamentos(){

    const [agendamentos, setAgendamentos] = useState([]);
    const location = useLocation();
    const parametros = new URLSearchParams(location.search);

    

    useEffect(() => {
        const userId = parametros.get('userId');
        const allParam = parametros.get('all');

        const baseUrl = 'http://localhost:3000/visitas';
        const url = allParam ? baseUrl : `${baseUrl}?idUsuario=${userId}`; 

        console.log(allParam)
            axios.get(url)
            .then(res => {
                console.log(res.data);
                setAgendamentos(res.data);
            })
            .catch(err => console.log(err));

            console.log("INTERVAL")
            


    }, [])
    return (
      <div class="d-flex flex-column" id="users-controle">
            <div class="d-flex justify-content-between">
                <h2>Agendamentos</h2>
            </div>
            <hr />
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Data</th>
                            <th scope="col">Horário</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Id do usuário</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agendamentos.map((agendamento) => (
                            <tr>
                                <td>{agendamento.id}</td>
                                <td>{agendamento.data}</td>
                                <td>{agendamento.horario}</td>
                                <td>{agendamento.quantidade}</td>
                                <td>{agendamento.email}</td>
                                <td>{agendamento.idUsuario}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Agendamentos;