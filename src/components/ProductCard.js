import { Button, Card} from 'react-bootstrap';

const ProductCard = () => {
    return (
        <Card style={{ width: '18rem' }} className='mt-3'>
        <Card.Img variant="top" src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" />
        <Card.Body className='text-center'>
          <Card.Title >NameProduct</Card.Title>
          <Card.Text>
          <span className='fst-italic'>Description</span>
          </Card.Text>
          <Card.Text>
          <span className='fs-3 '>Price</span>
          </Card.Text>
          <Card.Text>
          
          <Button className='rounded-pill text-white-50 bg-dark'> <span className='mx-5'>Add to cart</span></Button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
export default ProductCard