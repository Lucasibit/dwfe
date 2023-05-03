import React from "react";

import Modal from "./Modal";

function Card({imagemLink, titulo, descricao}){
    
    const [modal, setModal] = React.useState(false);

    const modalIsOpen = () => {
        return setModal(true);
    }

    let styleCard = {
        width: '20rem',
        minHeight: '500px',
        maxHeight: '650px'
    }

    let styleImgCard = {
        maxHeight:'225px',
        marginTop: '1rem'
    }

    let styleBtnCard = {
        backgroundColor: '#222',
        color: '#ffbb33'
    }

    const onMouseEnterHandle= (e) => {
        e.target.style.opacity = 0.90;
    }

    const onMouseOutHandle = (e) => {
        e.target.style.opacity = 1;
    }
    return (
        <>
            <div class="card" style={styleCard}>
                <img src={imagemLink} class="card-img-top" style={styleImgCard} alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{descricao}</p>
                    <div>   
                        {/*
                            <button type="button" class="btn btn-primary" onClick={() => modalIsOpen()}>
                                Ver Escultura
                            </button> 
                            */
                        }
                        <button type="button" class="btn" style={styleBtnCard} onMouseOut={onMouseOutHandle} onMouseEnter={onMouseEnterHandle} onClick={() => modalIsOpen()}>
                            Ver Escultura
                        </button> 
                    </div>
                </div>
            </div>

            {modal === true ? <Modal imagem={imagemLink} titulo={titulo} onClickClose={() => setModal(false)}/> : ''}
        </>
    )
}

export default Card;