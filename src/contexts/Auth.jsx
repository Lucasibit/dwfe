import { createContext, useEffect, useState } from "react";
import axios, { all } from "axios";

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [user, setUser] = useState();
    const [allUsers, setAllUsers] = useState([]);
    const [logado, setLogado] = useState(false);

    function postCadastrarUsuario(usuario){
        axios.post('http://localhost:3000/usuarios', usuario)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    async function getAllUsers(){
        const response = await axios.get('http://localhost:3000/usuarios');
        const data = response.data;
        return data;
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                    const data = await getAllUsers();
        
                    setAllUsers(data);
                    
                    const userToken = localStorage.getItem("user_token");
                    const usersStorage = data;

                    if(userToken && usersStorage){
                        const hasUser = usersStorage.filter(
                            (user) => user.email === JSON.parse(userToken).email
                        );

                        if(hasUser){
                            setUser(hasUser[0]);
                        }
                    }
        
            }catch(e){
                console.log(e);
            }
        }

        fetchData();
        
        
    }, [])


    function Signin(email, senha){
        const usersStorage = allUsers;
        console.log(allUsers);

        const hasUser = usersStorage.filter(user => user.email === email);
        if(hasUser.length){
            if (hasUser[0].email === email && hasUser[0].senha === senha) {
                const token = Math.random().toString(36).substring(2);
                const user = {email, token, nome: hasUser[0].nome, role: hasUser[0].role, id: hasUser[0].id}
                localStorage.setItem("user_token", JSON.stringify(user));
                console.log(localStorage.getItem("user_token"));
                setUser({ email, senha, nome:user.nome, role: user.role});
                setLogado(true);
                return;
            }else {
                return "E-mail ou senha incorretos";
            }
        }else {
            return "Usuário não cadastrado";
        }
    }


    function UsuarioAutenticado(){
        const storage = localStorage.getItem("user_token");
        return storage != undefined || storage != null ? true : false;
    }

    function Signup(nome, email, senha){
        const usersStorage = allUsers;

        const hasUser = usersStorage.filter(user => user.email === email);
        console.log(hasUser);
        if(hasUser.length){
            return "E-mail já cadastrado";
        }
        let newUser;
        if(nome, email, senha){
            newUser = {nome, email, senha, role: "museu:user"};
        }else{
            throw new Error()
        }

        postCadastrarUsuario(newUser);
        return;
    }

    function Signout(){
        setUser(null);
        localStorage.removeItem("user_token");
        setLogado(false);
    }
    return (
        <AuthContext.Provider value={{user, Signin, Signup, Signout, UsuarioAutenticado}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;