import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import './criarEsculturaModal.css';
import axios from "axios";

function CriarEsculturaModal({onClickClose}){

    const [escultura, setEscultura] = useState({});
    const navigate = useNavigate();

    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
        margin: "0",
    }

    function handleOnChange(e){
        setEscultura({...escultura, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    async function handleOnSubmit(){
        try{
            const response = await axios.post("http://localhost:3000/esculturas", escultura);
            console.log(response);
            if(response.status === 201){
                navigate('/esculturas');
            }else{
                alert("NÂO FOI POSSIVEL CRIAR")
            }
        }catch(e){
            alert("NÂO FOI POSSIVEL CRIAR")
        }
    }

    return (
        <div class="modal show fade  w-100 p-3 alignModal" style={modalStyle}>
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header modalFrag">
                    <h5 class="modal-title">
                        Criar Escultura
                    </h5>
                    <button type="button" class="btn-close" onClick={onClickClose}></button>
                </div>
                <div class="modal-body">
                    <div>
                        <form action="post">
                            <div class="form-floating">
                                <input type="text" onChange={handleOnChange} class="form-control" name="titulo" id="floatingTitle" placeholder="Titulo"/>
                                <label for="floatingTitle">Titulo</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" onChange={handleOnChange} name="descricao" id="floatingDescription" placeholder="Descrição"/>
                                <label for="floatingPassword">Descrição</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="url" class="form-control" onChange={handleOnChange} id="floatingInput" name="urlImagem" placeholder="URL Imagem"/>
                                <label for="floatingInput">URL Imagem</label>
                            </div>

                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClickClose}>Fechar</button>
                    <button onClick={handleOnSubmit} class="btn btnEsc">Criar</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CriarEsculturaModal;