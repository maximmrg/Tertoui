import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function NewsCarousel() {

    return <div style={{ display: 'block', width: 700, padding: 30 }}>
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                    alt="News 1"
                    variant="dark"
                />
                <Carousel.Caption>
                    <h3>News 1</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                    alt="News 2"
                />
                <Carousel.Caption>
                    <h3>News 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                    alt="News 3"
                />
                <Carousel.Caption>
                    <h3>News 3</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
}

export default NewsCarousel;