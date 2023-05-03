import './header.css'
import React from 'react'
import {Link} from 'react-router-dom'


function Header () {
    return (
        <div className="header-museu">
            <header>
                <div className="logo">
                    <h1><a href="">Museu Nacional</a></h1>
                </div>

                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/esculturas'>Esculturas</Link></li>
                        <li><Link to ='/contato'>Contato</Link></li>
                        <li><Link to ='/agendamento'>Agendamento</Link></li>

                    </ul>
                </nav>

            </header>
        </div>

    )
}

export default Header;
