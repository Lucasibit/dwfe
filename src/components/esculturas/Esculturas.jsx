import React, { useState } from "react";

import Card from "./card/Card";
import "./esculturas.css";
import CriarEsculturaModal from "./criarEscultura/modal/CriarEsculturaModal";
import useAuth from '../../hooks/useAuth';
function Esculturas(){

    const [esculturas, setEsculturas] = React.useState([])
    const [modal, setModal] = React.useState(false);

    function VerificandoRole(){
        const {user} = useAuth();

        return user.role === "museu:admin" ? (<div className="criarEsculturaBtn">
            <button type="button" className="btn" onClick={() => setModal(true)}>Criar Escultura</button>
        </div>) : "";
    }
    
    React.useEffect(() => {
        const lista = [];
        for(let i = 0; i < 31; i++){
            let escultura;
            if (i % 2 === 0){
                escultura = {
                    id: i,
                    imagemLink: "https://www.cidadeecultura.com/wp-content/uploads/2018/12/Copenhagen-Glyptotek-Museu-de-Esculturas-X-web.jpg",
                    titulo: "Estátuas Antigas",
                    descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi similique sint maxime, et rem deleniti praesentium pariatur maiores aliquid reprehenderit impedit quaerat distinctio odio eius est hic deserunt. Sapiente.",
                    }
            } else {
                escultura = {
                    id: 2,
                    imagemLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Napoli%2C_museo_archeologico_%288105421184%29.jpg/450px-Napoli%2C_museo_archeologico_%288105421184%29.jpg",
                    titulo: "Atlas Farnésio",
                    descricao: "Lorem ipsum dolor, sit amet consectetuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar adipisicing elit. Suscipit eligendi similique sint maxime, et rem deleniti praesentium pariatur maiores aliquid reprehenderit impedit quaerat distinctio odio eius est hic deserunt. Sapiente.",
                 }
            }

            if (escultura.descricao.length > 250){
                escultura.descricao = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos expedita modi in sapiente nam aperiam, a tempora nulla deleniti quidem ab neque similique accusamus obcaecati eum dicta iste fuga!";
            }
            lista.push(escultura);
        }
        setEsculturas(lista)
    }, [])
    console.log(esculturas)
    return (
        <>
            <div className="esculturas">
                <VerificandoRole/>
                <div class="row row-cols-1 row-cols-md-3 g-4 cards">

                    {esculturas.map((escultura) => <Card key={escultura.id} class="col"
                    imagemLink={escultura.imagemLink} titulo={escultura.titulo} descricao={escultura.descricao}/>
                    )}

                </div>
            </div>

            {modal === true ? <CriarEsculturaModal onClickClose={() => setModal(false)}/> : ""}
        </>

    )
}

export default Esculturas;