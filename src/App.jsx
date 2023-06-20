import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Esculturas from './components/esculturas/Esculturas';
import AgendarVisita from './components/agendarVisita/AgendarVisita';
import Contato from './components/contato/Contato';
import './app.css'

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={theme}>
      <>
        <Header setTheme={toggleTheme} />
        <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/esculturas" element={<Esculturas />} />
            <Route path="/agendamento" element={<AgendarVisita />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </>
    </ThemeContext.Provider>
  );
}

export default App;
