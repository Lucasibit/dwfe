import axios from "axios";
import { useState, useEffect } from "react"
import useAuth from '../../../hooks/useAuth';
import Alert from 'react-bootstrap/Alert';

function Users(){

    const[users, setUsers] = useState([]);
    const {user, Signout} = useAuth();
    const [show, setShow] = useState(false);


    useEffect( () => {
        try{
            axios.get('http://localhost:3000/usuarios')
            .then(res => setUsers(res.data))
            .catch(e => console.log(e));
            
        }catch(e){
            console.log(e)
        }
        
    }, [])

    async function DeleteUser(id){
        try{
            console.log(id);
            const respnse = await axios.delete(`http://localhost:3000/usuarios/${id}`);
            console.log(respnse);
            if(user.id === id){
                Signout();
                console.log(`${id}: Usuário deletado`)
            }

            window.location.reload();
            setShow(true);
        }catch(e){
            console.log(e);
        }
    }

    return(
    <>
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
                                <td><button type="button" className="btn btn-danger" onClick={() => DeleteUser(user.id)}>APAGAR</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <Alert show={show} variant="sucess">
            Usuário deletado
        </Alert>
        </>
    )
}

export default Users