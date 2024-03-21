import { Container } from "react-bootstrap";
import Silder from "./Silder";
import Slick from "./Slick";
import ProductGrid from './ProductGrid';
import { useEffect, useState } from "react";
import { getTopCombo } from "../services/productservice";

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
            }
        } catch (error) {
            console.error('Error fetching top combo:', error);
        }
    };
    return (
        <>

        <Container>
        <Silder />
        <Slick/>
        {
            listTopCombo && (
                <ProductGrid TileGrid={'Top Combo'} Products_data={listTopCombo}/>
            )
        }

        </Container>
        </>
        
    );
}
export default Content


