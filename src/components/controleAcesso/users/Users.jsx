import axios from "axios";
import { useState, useEffect } from "react"

function Users(){

    const[users, setUsers] = useState([]);


    useEffect(async () => {
        try{
            const response = await axios.get('http://localhost:3000/usuarios');
            setUsers(response.data);
            
        }catch(e){
            console.log(e)
        }
        
    }, [])


    async function deleteUser(id){
        try{
            console.log(id);
            const respnse = await axios.delete(`http://localhost:3000/usuarios/${id}`);
            console.log(respnse);
            window.location.reload();
        }catch(e){
            console.log(e);
        }
    }

    return(

        <div class="d-flex flex-column">
            <div class="d-flex justify-content-between">
                <h2>Usuários</h2>
            </div>
            <hr />
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Usuário</th>
                            <th scope="col">Role</th>
                            <th scope="col">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>APAGAR</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users