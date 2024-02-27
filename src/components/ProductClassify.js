import { Card} from 'react-bootstrap';

const ProductClassify = (props) => {
  const {nameclassify } = props;
    return (
        <Card className='card h-100 mx-1 my-3'>
        <Card.Img variant="top" src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" className='px-3' />
        <Card.Body className='text-center'>
          <Card.Title >{nameclassify}</Card.Title>
        </Card.Body>
      </Card>
    );
}
export default ProductClassify