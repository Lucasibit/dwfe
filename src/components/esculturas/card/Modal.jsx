import Escultura from "../escultura/Escultura";

import { Link } from "react-router-dom";

function Modal({imagem, titulo, onClickClose}){

    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
        margin: "0",
    }

    return (
        <div class="modal show fade  w-100 p-3" style={modalStyle}>
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        {titulo}
                    </h5>
                    <button type="button" class="btn-close" onClick={onClickClose}></button>
                </div>
                <div class="modal-body">
                    <Escultura imagem={imagem} titulo={titulo}/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClickClose}>Fechar</button>
                    <Link to="/agendamento" class="btn btn-primary">Agendar Visita</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;