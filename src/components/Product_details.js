import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useParams } from 'react-router-dom';

import { useCart } from "./Context/CartContext";
import { getProductById } from "../services/productservice";
const Product_details = () => {
    const [isHover, setIsHover] = useState();
    const { productId } = useParams();
    const handleMouseEnter = (id) => {
        setIsHover(id);
    };
    const [items, setItems] = useState([]);

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async () => {
        let res = await getProductById();
        if (res) {
            setItems(res)
            console.log(res)
        }
    }
    const targetProduct = items.find(product => product.id == productId);
    const { addItemToCart } = useCart();
    const handleAddToCartClick = () => {
        addItemToCart(targetProduct);
    };
    return (

        <>
            {
                targetProduct &&
                (
                    <Container className="vh-100">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'> Trang chủ </Link></li>
                                <li className="breadcrumb-item"><Link to='/'> Trang chủ </Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{targetProduct.name}</li>
                            </ol>
                        </nav>
                        <h3>{targetProduct.name}</h3>
                        <div>sao đánh giá</div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex">
                                    <div className="d-flex flex-column ">
                                        <span className={`border my-1 py-2 px-2 ${isHover === 1 ? 'border-warning' : ''}`} >
                                            <img src="https://cdn.vjshop.vn/thiet-bi-lam-video/microphone/dji-mic/dji-mic-2tx/dji-mic-2tx-1rx-55x55.jpg" onMouseEnter={() => handleMouseEnter(1)} style={{ height: '40px', width: '40px', }} alt="Camera" />
                                        </span>
                                        <span className={`border my-1 py-2 px-2 ${isHover === 2 ? 'border-warning' : ''}`}  >

                                            <img src="https://cdn.vjshop.vn/thiet-bi-lam-video/microphone/dji-mic/dji-mic-2tx/dji-mic-2tx-1rx-3-55x55.jpg" onMouseEnter={() => handleMouseEnter(2)} style={{ height: '40px', width: '40px' }} alt="Camera" />

                                        </span>
                                        <span className={`border my-1 py-2 px-2 ${isHover === 3 ? 'border-warning' : ''}`}  >
                                            <img src="https://cdn.vjshop.vn/thiet-bi-lam-video/microphone/dji-mic/dji-mic-2tx/dji-mic-2tx-1rx-2-55x55.jpg" onMouseEnter={() => handleMouseEnter(3)} style={{ height: '40px', width: '40px' }} alt="Camera" />
                                        </span>


                                    </div>
                                    <img src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" className="mx-3" style={{ height: '500px' }} alt="Camera" />

                                </div>
                                <div>Ảnh thực tế</div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex">


                                </div>
                                <h4>Thông tin nổi bật</h4>
                                <ul >
                                    <li >Ghi hai kênh</li>
                                    <li >Khả năng tương thích rộng</li>
                                    <li >Phạm vi truyền 250m</li>
                                    <li >Thiết kế di động và nhỏ gọn</li>
                                    <li >Thời lượng pin 15 giờ với hộp sạc</li>
                                </ul>
                                <p>Mô tả</p>
                                <h1>Giá: {targetProduct.price}</h1>
                                <div>
                                    <input></input>
                                    <button>Mua ngay</button>
                                    <button onClick={handleAddToCartClick}>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </Container>
                )
            }
        </>
    )
}

export default Product_details;