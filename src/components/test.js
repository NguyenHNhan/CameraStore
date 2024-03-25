import { Container } from "react-bootstrap";
import ProductGrid from "./ProductGrid"

import { getAllProduct } from "../services/productservice";
import { useEffect, useState } from "react";

const Test = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async () => {
        let res = await getAllProduct();
        if (res) {
            setItems(res)
            console.log(res)
        }
    }
    return (
        <>
            <Container>
                <div className="row bg-body px-5 pt-5 ">
                    <div className="px-5">
                        <input className="form-control rounded-pill" placeholder="Tìm kiếm" />
                    </div>
                    <div className="mt-3 mb-3">
                        <span> Mức giá: </span>
                        <button className="btn border rounded-pill mx-1">Dưới 20 triệu</button>
                        <button className="btn border rounded-pill mx-1">Từ 20-40 triệu</button>
                        <button className="btn border rounded-pill mx-1 ">Từ 40-60 triệu</button>
                    </div>
                    <div className="row">
                        <span className="col-sm-1">Sắp xếp</span>
                        <div class="dropdown col-sm-2">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <span className="col-sm-1">Sắp xếp</span>
                        <div className="col-sm-3"> dnaj hien thi </div>
                    </div>

                </div>
                <ProductGrid Products_data={items} />
            </Container>

        </>
    )
}

export default Test;