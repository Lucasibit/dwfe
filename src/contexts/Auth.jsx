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
                const intervalId = setInterval(async () => {
                    // Lógica que será executada a cada 2 segundos
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
                    console.log('Executando a cada 2 segundos');
                }, 2000);

                return () => {
                    // Limpar o intervalo quando o componente for desmontado
                    clearInterval(intervalId);
                };
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
                localStorage.setItem("token", token);
                console.log(localStorage.getItem("token"));
                const nome = hasUser[0].nome;
                setUser({ email, senha, nome});
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
        const storage = localStorage.getItem("token");
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
            newUser = {nome, email, senha};
        }else{
            throw new Error()
        }

        postCadastrarUsuario(newUser);
        return;
    }

    function Signout(){
        setUser(null);
        localStorage.removeItem("token");
        setLogado(false);
    }
    return (
        <AuthContext.Provider value={{user, logado: true, Signin, Signup, Signout, UsuarioAutenticado}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;