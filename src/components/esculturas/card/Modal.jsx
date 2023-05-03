import { Link } from "react-router-dom";

function Modal({imagem, titulo, onClickClose}){

    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
        margin: "0",
    }

    let styleEsculturaImg = {
        width: '28rem',
        borderRadius: '15px',
        marginBottom: '2rem'
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
                    <div>
                        <img src={imagem} alt="" style={styleEsculturaImg}/>
                        <h4>Sobre {titulo}</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt, accusantium, quia in commodi laudantium ducimus alias itaque laborum quidem aliquam enim expedita vero voluptas asperiores? Fugiat quas quam eius?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique, eaque esse culpa delectus commodi aperiam quaerat consequuntur eveniet officia, saepe doloribus pariatur facilis quos. Facere unde blanditiis optio ab?
                            Nulla porro, cum fuga at nam molestiae rem consequuntur reiciendis. Laudantium dignissimos esse, deleniti sunt quam fugiat dolor commodi illo itaque ratione cum veniam, magni recusandae, accusantium similique fugit aliquam.
                            Cum, ipsa cupiditate officia temporibus quod dolore id numquam illum ex fugit non voluptatem aut consectetur minima, culpa labore, nam aspernatur debitis nulla architecto! Aliquam officiis sint maiores deleniti soluta!
                            Aspernatur, consequuntur! Aperiam dolorum tenetur aliquam qui quos ullam sunt. Delectus laborum accusantium facere. Aliquid alias totam optio veritatis provident sint excepturi architecto modi accusantium fuga eaque, quia, nesciunt explicabo.
                            Similique blanditiis incidunt temporibus nobis sed assumenda cupiditate numquam enim nam ratione. Tenetur voluptatem id totam culpa rem non, cumque earum praesentium harum similique sit aliquam dolorum ab fugiat voluptatibus.
                            Accusantium rem impedit vel expedita, fuga explicabo eos exercitationem? Ratione alias beatae a labore minus perspiciatis quia temporibus hic veniam. Ullam laborum deleniti nihil numquam reiciendis magnam voluptatum dicta sapiente.
                            Tenetur esse aliquid eius asperiores sequi fugit voluptas libero maiores sint ex, odit eaque. Alias neque quae molestias eveniet porro repellat, quo, est sint voluptatum accusantium dolores necessitatibus consectetur tempore.
                            Quia, deserunt voluptatum ipsa minima accusamus, quam aut aliquam vero provident, dicta voluptatibus modi autem optio delectus. Porro alias, natus mollitia accusantium similique nulla sint ab ullam ipsum fugiat corporis.
                            Maxime repellendus in numquam tempore velit eaque, doloremque aliquid iusto ipsa earum, harum veritatis? Fugit ipsum, repellendus, nesciunt, totam sunt iure ipsa ad id in itaque adipisci facilis magnam aspernatur?
                            Tenetur animi beatae fuga mollitia odit sequi suscipit, hic optio minima? Eos doloremque, corrupti aut vitae commodi eius blanditiis voluptates nostrum et incidunt sapiente ipsa molestiae voluptatem, numquam doloribus aperiam.
                        </p>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClickClose}>Fechar</button>
                    <Link to="/agendar-visitas" class="btn btn-primary">Agendar Visita</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;