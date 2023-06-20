import './header.css'
import React from 'react'
import { Link } from 'react-router-dom'


function Header({ setTheme }) {
    return (
        <div className="header-museu">
            <header>
                <div className="logo">
                    <h1><Link to="/">Museu Nacional</Link></h1>
                </div>

                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/esculturas'>Esculturas</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>
                        <li><Link to='/agendamento'>Agendamento</Link></li>
                        <a onClick={setTheme} class="themeProvider">
                            <li class='fa-regular fa-moon'></li>
                        </a>

                    </ul>
                </nav>

            </header>

        </div>

    )
}

export default Header;
