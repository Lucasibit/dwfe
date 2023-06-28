import './header.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth';

function Header({ setTheme, tema }) {

  const { user, Signout } = useAuth();
  const [showDrop, setShowDrop] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  function handleOnClick() {
    setShowDrop(!showDrop);
  }

  function VerificarRole() {
    console.log(user);
    return user.role === "museu:admin" ? (<Link to="/users" className='btn'>Gerir Usuários</Link>) : "";
  }


  function handleOnChange() {
    setIsChecked(!isChecked);
    setTheme();
  }

    const switchClassName = isChecked ? 'form-check form-switch checked' : 'form-check form-switch';
    

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)

  }

  
    return (
        <div className="header-museu">
            <header>
                <div className="logo">
                    <h1><Link to="/home">Museu Nacional</Link></h1>
                </div>

                  <nav>
                      <ul id='navbar'  className={clicked ? "#navbar active" : "#navbar"}>
                          <li><Link to='/home'>Home</Link></li>
                          <li><Link to='/esculturas'>Esculturas</Link></li>
                          <li><Link to='/contato'>Contato</Link></li>
                          <li><Link to='/agendamento'>Agendamento</Link></li>
                          <li>
                          <div className='themeAndUser'>
                    {
                      /*
                        <i class={`themeProvider ${tema !== "dark" ? "fa-regular fa-moon" : "fa-solid fa-sun-bright"}`} onClick={setTheme} id='moon'></i>

                      */
                    }
                    <div class={switchClassName}>
                      
                      <label class="form-check-label" for="flexSwitchCheckDefault">
                        <i className={`themeProvider fa-regular fa-moon`} onClick={setTheme} id='moon'></i>
                      </label>
                    </div>
                    <div className='userDropContainer'>
                      <div className='user-btn'>
                        <button type="button" className='userIcon' onClick={handleOnClick}><i class="far fa-user" id='userIcon'></i></button>
                      </div>
                      
                      {showDrop && (
                        <div class="dropdownUser">
                            <div className='dropHeader'>
                              <h5>{user.nome}</h5>
                              <button type="button" className='dropBtn' onClick={handleOnClick}>X</button>
                            </div>
                            <hr/>

                            <div className='btnSair'>
                              <VerificarRole/>
                              <button className='btn' onClick={() => [Signout(), navigate('/')]}>Sair</button>
                            </div>
                        </div>
                      )}
                    </div>
                    
                  </div>
                              
                          </li>
                          <li id='lastChield'>
                          </li>
                      </ul>
                      <div id='mobile' onClick={handleClick}>
                        <i id='bar' className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                      </div>
                    

                  </nav>

                 
            </header>

    </div>

  )
}

export default Header;
