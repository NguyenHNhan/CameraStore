import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTopCombo } from "../services/productservice";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCableCar, faCartPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Content = () => {
    const [listTopCombo, setlistTopCombo] = useState([]);
    useEffect(() => {
        getDataTopCombo();
    }, []);
    const getDataTopCombo = async () => {
        try {
            const res = await getTopCombo();
            if (res) {
                setlistTopCombo(res);
                console.log(res)
            }
        } catch (error) {
            console.error('Error fetching top combo:', error);
        }
    };
    // const formatter = new Intl.NumberFormat('vi-VN');
    // const formattedPrice = formatter.format(price);
    const images = [
        "https://th.bing.com/th/id/R.0ad295110a1d91313e176bb3108c9201?rik=mqjFLyU2CVqbYw&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.34WtwCAwd4i1GfMRDI2yLAHaFo?rs=1&pid=ImgDetMain",
        "https://benhvienmayanh.com/files/images/banner/sua-may-anh-nikon-banner.png",
        "https://th.bing.com/th/id/R.37d65d5bf7ca721693ef9a49a65a9c94?rik=8bSX1%2fy12ZjdoA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-zacSncl3zE4%2fT7nLUSEq8hI%2fAAAAAAAADuY%2fVyJEf8u0Adg%2fs1600%2fNikon%2bD90.jpg&ehk=C5vEipE4BLNix%2blwyo6anqIYiJRrWHbY4nNPssyEF2A%3d&risl=&pid=ImgRaw&r=0"
    ];
    const [idx, setIdx] = useState(0);
    const [transition, setTransition] = useState(0)
    const handleNextClick = () => {
        setTransition(1)
        setTimeout(() => {
            setIdx(prevIdx => (prevIdx + 1) % images.length);
        }, 900);
    }
    const handlePrevClick = () => {
        setTimeout(() => {
            setIdx(prevIdx => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
            setTransition(0)
        }, 900);
    }
    return (
        <>
            <div className="vh-100 header_content">
                <img src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/825d744e-cfd3-4c81-9a0e-1eee9da0ee42"></img>
                <span>Canon</span>
            </div>
            <div className="vh-100 bg-dark">
                <Container className="vh-100">
                    <h1>SALE</h1>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {listTopCombo && listTopCombo.slice(0, 4).map((items, idx) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="col" key={idx} >
                                <Card className="p-3">
                                    <Card.Img variant="top" src={items.img_product} className='p-5' />
                                    <Link to={`/product_details/`} className='title_products text-center px-4'> {items.name_product} </Link>
                                    <div className='text-center d-flex flex-column justify-content-end' >
                                        <div className='my-0 price_products'>
                                            {/* <span className='fs-4'>{formattedPrice}</span><span className={'align-top fs-0'}>đ</span> */}
                                        </div>
                                        <Button className='rounded-pill text-white-50 bg-dark ' > <span className='mx-5'>Add to cart</span></Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <div className='my-3 text-center'>
                    </div>
                </Container>
            </div>
            <div className="vh-100 body_content">
                <div className="body_content_left" >
                    <span > T-Shirt </span>
                    <span className="fs-5 fw-normal"> This tee features premium, midweight cotton and our signature Max90 fit, which gives you some room through the sleeves and body for comfort and style. Now pull on this tee and rock it with your favourite Dunks.</span>
                    <span className="fs-2" >200.000.000đ</span>
                </div>
                <div className="body_content_right">
                <motion.div className="option"
                animate={{x: transition ? "50%" : 0 }}
                transition={{ duration: 0.89 }}
                >
                        <img className="img_products " src={idx === 0 ? images[images.length - 1] : images[idx - 1]}></img>
                    </motion.div>
                    <FontAwesomeIcon onClick={handlePrevClick} className="icon" icon={faChevronLeft} />
                    <div className="glass">
                        <motion.img className="img_products" src={images[idx]}
                        whileHover={{ scale: 1.1 }} 
                        animate={{x: transition ? "50%" : 0 }}
                        transition={{ duration: 0.89 }}/>
                        <div >
                        <button >Buy Now</button> <FontAwesomeIcon className="icon" icon={faCartShopping} />
                        </div>
                    </div>
                    <FontAwesomeIcon onClick={handleNextClick} className="icon" icon={faChevronRight} />
                    <motion.div className="option"
                     animate={{x: transition ? "50%" : 0 }}
                     transition={{ duration: 0.89 }}
                     >
                        <img className="img_products " src={idx === images.length - 1 ? images[0] : images[idx + 1]}></img>
                    </motion.div>

                </div>
            </div>
        </>
    );
}
export default Content


