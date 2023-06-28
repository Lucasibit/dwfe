import React, { useEffect, useState } from 'react';
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
import './app.css'
import Registrar from './components/controleAcesso/registrar/Registrar';
import Users from './components/controleAcesso/users/Users';

function App() {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const Private = ({ Item}) => {
    const auth = useAuth();

    return auth.UsuarioAutenticado() ? <Item /> : <Login />;
  };

  const PrivateComp = ({Item}) => {
    const auth = useAuth();

    return auth.UsuarioAutenticado() ?Item : "";
  }

  const PrivateAcesso = ({Item}) => {
    const auth = useAuth();

    return auth.UsuarioAutenticado() ? navigate("/home") : Item;
  }
  return (
    <ThemeContext.Provider value={theme}>
      <AuthProvider>
        <PrivateComp Item={<Header setTheme={toggleTheme} tema={theme} />}/>
        <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
          <Routes>
            <Route exact path="/home" element={<Private Item={Home}/>} />
            <Route exact path="/esculturas" element={<Private Item={Esculturas} />} />
            <Route exact path="/agendamento" element={<Private Item={AgendarVisita} />} />
            <Route exact path="/contato" element={<Private Item={Contato} />} />
            <Route exact path="/users" element={<Private Item={Users} />} />
            <Route exact path='/registrar' element={<PrivateAcesso Item={<Registrar/>} />}/>
            <Route path='/' element={<PrivateAcesso Item={<Login/>} />}/>
            <Route path='*' element={<Private Item={<Home/>} />}/>
          </Routes>
        </div>
        <PrivateComp Item={<Footer />}/>
      </AuthProvider>

    </ThemeContext.Provider>
  );
}

export default App;
