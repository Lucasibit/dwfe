import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Esculturas from './components/esculturas/Esculturas';
import AgendarVisita from './components/agendarVisita/AgendarVisita';
import Contato from './components/contato/Contato';
import Login from './components/controleAcesso/login/Login';
import AuthProvider from './contexts/Auth';
import useAuth from './hooks/useAuth';
import ComponenteVazio from './components/ComponenteVazio';
import './app.css'
import Registrar from './components/controleAcesso/registrar/Registrar';

function App() {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const Private = ({ Item}) => {
    const {UsuarioAutenticado} = useAuth();
    console.log(UsuarioAutenticado());

    console.log(localStorage.getItem("user_token"));
    return UsuarioAutenticado() ? <Item /> : <Login />;
  };

  const PrivateComp = ({Item}) => {
    const {UsuarioAutenticado} = useAuth();

    return UsuarioAutenticado() ?Item : "";
  }

  const PrivateAcesso = ({Item}) => {
    const {UsuarioAutenticado} = useAuth();

    return UsuarioAutenticado() ? navigate("/home") : Item;
  }
  return (
    <ThemeContext.Provider value={theme}>
      <AuthProvider>
        <PrivateComp Item={<Header setTheme={toggleTheme} />}/>
        <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
          <Routes>
            <Route exact path="/home" element={<Private Item={Home}/>} />
            <Route exact path="/esculturas" element={<Private Item={Esculturas} />} />
            <Route exact path="/agendamento" element={<Private Item={AgendarVisita} />} />
            <Route exact path="/contato" element={<Private Item={Contato} />} />
            <Route exact path='/registrar' element={<PrivateAcesso Item={<Registrar/>} />}/>
            <Route path='/' element={<PrivateAcesso Item={<Login/>} />}/>
          </Routes>
        </div>
        <PrivateComp Item={<Footer />}/>
      </AuthProvider>

    </ThemeContext.Provider>
  );
}

export default App;
