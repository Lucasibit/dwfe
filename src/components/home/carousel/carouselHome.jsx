import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../imagens/img1.jpg'
import img2 from '../imagens/img2.jpg'
import './carousel.css';


function CarouselHome() {
    return (
        <div className='carousel-museu'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselHome;