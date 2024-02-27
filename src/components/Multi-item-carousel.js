import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src='https://cdn.vjshop.vn/banner-trang-chu/500mm-f5615mm-f14-1350x300-mobile.jpg' className='d-block w-100' alt='...' />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://cdn.vjshop.vn/banner-trang-chu/km-sonyt1-11350x300-mobile.jpg' className='d-block w-100' alt='...' />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://cdn.vjshop.vn/banner-trang-chu/sony-zv-1i-i-1350x300-mobile-1.jpg' className='d-block w-100' alt='...' />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://cdn.vjshop.vn/banner-trang-chu/sony-zv-1i-i-1350x300-mobile-1.jpg' className='d-block w-100' alt='...' />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider
