import './mainHome.css'
import img3 from '../imagens/img3.jpg'

function MainHome() {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='row row-home'>
                <div className='col-lg-8 col-md-12 col-sm-12'>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus dicta nihil officia repellendus aspernatur ab vitae ullam magnam laborum,
                        voluptates culpa obcaecati voluptate ipsa! Exercitationem expedita ducimus rem est. Lorem ipsum dolor,
                        sit amet consectetur adipisicing elit. Consequatur fuga illo aut quidem praesentium, officiis magni temporibus
                        voluptates, quasi maiores molestias sint quis distinctio, aspernatur est nobis quos ut? Odit
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid possimus eum? Fugiat ratione totam adipisci numquam? Voluptates laborum cum totam porro, libero itaque eveniet sapiente, a assumenda ducimus cupiditate!
                        Excepturi numquam fugiat incidunt, nihil amet id provident consequuntur eveniet dolores enim iusto hic, suscipit cupiditate eligendi dolorum dicta. Sapiente modi iusto fugiat ipsam nihil reprehenderit voluptates impedit consequuntur itaque!
                        Voluptatem assumenda dolores reprehenderit aperiam, non in? Impedit rerum perspiciatis aliquam,
                        aut atque delectus numquam odio nihil,
                        sunt molestiae aliquid id ratione tempore dignissimos voluptatibus ut sint enim cum. Dolorem? 
                           .</h3>
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