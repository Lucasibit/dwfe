import './header.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth';

function Header({ setTheme }) {

    const {user, Signout} = useAuth();
    const navigate = useNavigate();

    return (
        <div className="header-museu">
            <header>
                <div className="logo">
                    <h1><Link to="/home">Museu Nacional</Link></h1>
                </div>

                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/esculturas'>Esculturas</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>
                        <li><Link to='/agendamento'>Agendamento</Link></li>
                        <li>
                            
                        </li>
                        <li id='lastChield'>
                            <i class='themeProvider fa-regular fa-moon' onClick={setTheme} id='moon'></i>

                            <Link to="/" onClick={() => [Signout(), navigate("/")]}>Sair <i class="far fa-user"></i></Link>
                        </li>
                        
                        

                    </ul>
                </nav>

            </header>

        </div>

    )
}

export default Header;
