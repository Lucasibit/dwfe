import './style.css'

export default function Footer() {
    return(

    <footer>
        <div id="footer-content">
            <div id="footer-contacts">
                <h1>Museu Nacional</h1>
                <p>Museu de esculturas antigas</p>

                <div id="footer-social-media">
                    <a href="#" class="footer-link" id='instagram'>
                        <li class='fa-brands fa-instagram'></li>
                    </a>

                    <a href="#" class="footer-link" id='facebook'>
                        <li class='fa-brands fa-facebook-f'></li>
                    </a>

                    <a href="#" class="footer-link" id='whatsapp'>
                        <li class='fa-brands fa-whatsapp'></li>
                    </a>
                </div>
            </div>

            <ul class="footer-list">
                <li>
                    <h3>Esculturas</h3>
                </li>
                <li>
                    <a href="#" class="footer-link">Antigas</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Classicas</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Em Exposição</a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h3>Agendamento</h3>
                </li>
                <li>
                    <a href="#" class="footer-link">Contato</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Sobre Nós</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Visitas</a>
                </li>


            </ul>

            <div id="footer-subscribe">
                <h3>Inscreva-se</h3>

                <p>
                    Entre com seu e-mail para receber notificacoes sobre
                </p>

                <div id="input-group">
                    <input type="email" id="email" />
                    <button>
                        <i class="fa-regular fa-envelope"></i>
                    </button>
                </div>
            </div>

        </div>

        <div id="footer_copyright">
            &copy; 2023 All rights reserved.
        </div>
    </footer>

    )
}