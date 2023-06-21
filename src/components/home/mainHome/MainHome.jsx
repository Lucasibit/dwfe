import './mainHome.css'
import img3 from '../imagens/img3.jpg'

function MainHome() {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='row row-home'>
                <div className='col-lg-8 col-md-12 col-sm-12'>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus dicta nihil officia repellendus aspernatur ab vitae ullam magnam laborum, voluptates culpa obcaecati voluptate ipsa! Exercitationem expedita ducimus rem est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fuga illo aut quidem praesentium, officiis magni temporibus voluptates, quasi maiores molestias sint quis distinctio, aspernatur est nobis quos ut? Odit.</h3>
                    <button type="button" class="btn btn-link" onclick="window.location.href = 'link das esculturas'">Clique aqui</button>

                </div>
                <div className='col-lg-4 col-md-12 col-sm-12'>
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