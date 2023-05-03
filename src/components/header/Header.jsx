import './header.css'
import React from 'react'
import {Link} from 'react-router-dom'



function Header () {
    return (
        <div className="container">
            <header className="flex justify-between items-center px-6 py-4 mb-10">
                <div className="logo">
                    <h1><a href="">Museu Nacional</a></h1>
                </div>

                <nav>
                    <ul>
                        <li><Link to = '/'>Home</Link></li>
                        <li><Link to = '/artes'>Artes</Link></li>
                        <li><Link to = '/contato'>Contato</Link></li>
                        <li><Link to = '/agendamento'>Agendamento</Link></li>

                    </ul>
                </nav>

            </header>
        </div>

    )
}

export default Header;
