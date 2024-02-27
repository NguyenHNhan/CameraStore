import Carousel from 'react-bootstrap/Carousel';
import { Card, Row, Col } from 'react-bootstrap';


const Slider = () => {
    return (
        <Carousel variant='dark' className='bg-dark my-2 p-2 ' >
            <Carousel.Item className='mx-3'>
                <Row xs={1} md={2} className="g-2">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card className='w-50 p-3'>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Carousel.Item>
        </Carousel>
    );
}

export default Slider
