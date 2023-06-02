import React from "react";
import './footer.css';
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"

function Footer(){
    return (
        <footer className="footer">
            <ul>
                <li>
                    <a href="#">
                        <FaFacebook/>
                    </a>
                    
                </li>
                <li>
                    <a href="#">
                        <FaInstagram/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaLinkedin/>
                    </a>
                </li>
            </ul>
            <p className="copy_right"><span>Museu Nacional</span> &copy; 2023</p>

        </footer>
    )
}

export default Footer;