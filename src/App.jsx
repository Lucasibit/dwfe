import Esculturas from './components/esculturas/Esculturas';
import Home from './components/home/Home';
import AgendarVisita from './components/agendarVisita/AgendarVisita';

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
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/esculturas" element={<Esculturas/>}/>
            <Route path="/agendar-visitas" element={<AgendarVisita/>}/>
          </Routes>
        </div>
      </body>
      </>
  );
}

export default App;
