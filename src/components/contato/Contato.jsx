import React from "react";
import './Contato.css'



function Contato () {

    return (
        <div className="contato">
            
            <section>
                <h2>Contato</h2>
                <form action="https://api.staticforms.xyz/submit" method="post">
                    <label>Nome</label>
                    <input type="text" name="name" placeholder="Digite seu nome" autocomplete="off" required/>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Digite seu email" autocomplete="off" required/>
                    <label>Mensagem</label>
                    <textarea name="message" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
                    <button type="submit">Enviar</button>

                    <input type="hidden" name="accessKey" value="#"/>
                    <input type="hidden" name="redirectTo" value="#"/>
                </form>
            </section>
            
        </div>

    )
}

export default Contato;
