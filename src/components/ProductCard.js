import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Context/CartContext';
import { getProductById } from '../services/productservice';

const ProductCard = (props) => {

  const { idproduct, nameproduct, imgproducts, price } = props;
  const [isHover, setIsHover] = useState(false);
  const formatter = new Intl.NumberFormat('vi-VN');
  const formattedPrice = formatter.format(price);

  const { addItemToCart } = useCart();

  const handleAddToCartClick = async () => {
    let res = await getProductById(idproduct);
    console.log(res)
    addItemToCart(res);
  };

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
    <Card className={boxClassName} style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card.Img variant="top" src={imgproducts} className='p-5' />
      <Link to={`/product_details/${idproduct}`} className='title_products text-center px-4'> {nameproduct} </Link>
      <Card.Body className='text-center d-flex flex-column justify-content-end' >
        <Card.Text className='my-0 price_products'>
          <span className='fs-4'>{formattedPrice}</span><span className={'align-top fs-0'}>đ</span>
        </Card.Text>
        <Button className='rounded-pill text-white-50 bg-dark ' onClick={handleAddToCartClick} > <span className='mx-5'>Add to cart</span></Button>
      </Card.Body>
    </Card>
  );
}
export default ProductCard