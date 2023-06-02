import Esculturas from './components/esculturas/Esculturas';
import Home from './components/home/Home';
import AgendarVisita from './components/agendarVisita/AgendarVisita';
import Header from './components/header/Header';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';

import BootstapCSS from './bootstrap/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <head>
        <title>Projeto dia a dia</title>
        <link href={BootstapCSS} rel="stylesheet"></link>
      </head>
      
      <body>
        <Header/>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/esculturas" element={<Esculturas/>}/>
            <Route path="/agendamento" element={<AgendarVisita/>}/>
            <Route path="/contato" element={<Contato/>}/>
          </Routes>
        </div>
        <Footer/>
      </body>
      </>
  );
}

export default App;
