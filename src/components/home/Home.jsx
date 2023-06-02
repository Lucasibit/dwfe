import './home.css';

import { Link } from "react-router-dom";

function Home(){

    let styleButtons = {
        display:'flex',
        gap: '2rem'
    }

    return (
        <section className="home_container">
            <h1>Bem-vindo ao <span>Museu Nacional</span></h1>

            <p>Agende sua visita ao nosso museu!</p>
            <div style={styleButtons}>
                <Link to="/esculturas" className="btn button">Ver Esculturas</Link>
                <Link to="/agendamento" className="btn button">Agendar Visita</Link>
            </div>

        </section>
    )
}

export default Home;