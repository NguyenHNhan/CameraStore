import { Button, Card} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const {idproduct, nameproduct, description, price } = props;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };
  const boxClassName = `card h-100 ${isHover ? 'shadow bg-body rounded' : ''}`;
  const boxStyle = {
   color: isHover ? 'red' : 'green',
   
};
    return (
        <Card  className={boxClassName} style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Card.Img variant="top" src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" className='px-3' />
        <Card.Body className='text-center'>
          <Card.Title > <Link to={`/Product_details/${idproduct}`}> {nameproduct} </Link></Card.Title>
          <Card.Text>
          <span className='fst-italic'>{description}</span>
          </Card.Text>
          <Card.Text>
          <span className='fs-3 '>{price}</span>
          </Card.Text>
          <Card.Text>
          <Button className='rounded-pill text-white-50 bg-dark'> <span className='mx-5'>Add to cart</span></Button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
export default ProductCard