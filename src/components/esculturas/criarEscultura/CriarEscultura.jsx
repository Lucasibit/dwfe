function CriarEscultura(){
    
    return (
        <div className="criarEscultura">

            <div className="criarEsculturaContainer">
                <h2>Criar Escultura!</h2>
                <div className="form">
                    <form action="post" novalidate>
                        <div className="nomeEsculturaInput">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome" />
                        </div>

                        <div className="imagemUrlEsculturaInput">
                            <label htmlFor="imagem">Url Imagem</label>
                            <input type="text" class="form-control" id="validationCustom03" aria-describedby="inputGroupPrepend" required/>
                            <div class="invalid-feedback">
                                example@gmail.com
                            </div>                        
                        </div>

                        <div className="descricaoEsculturaInput">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea name="descricao" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
                        </div>

                        <div className="div">
                            <button type="submit">Criar</button>u
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CriarEscultura;