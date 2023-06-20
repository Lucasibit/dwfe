import './mainHome.css'
import img3 from '../imagens/img3.jpg'

function MainHome() {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='row row-home'>
                <div className='col-8'>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus dicta nihil officia repellendus aspernatur ab vitae ullam magnam laborum, voluptates culpa obcaecati voluptate ipsa! Exercitationem expedita ducimus rem est.</h3>
                    <button type="button" class="btn btn-link" onclick="window.location.href = 'link das esculturas'">Clique aqui</button>

                </div>
                <div className='col-4'>
                    <img
                        className="home-image"
                        src={img3}
                        alt="First"
                    />
                </div>
            </div>
        </div>
    )

}

export default MainHome