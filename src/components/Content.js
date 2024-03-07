import { Container } from "react-bootstrap";
import Silder from "./Silder";
import Slick from "./Slick";
import ProductGrid from './ProductGrid';

const Content = () => {
    return (
        <>

        <Container>

        <Silder />
        <Slick/>
        <ProductGrid TileGrid={'Top Combo'}/>
        <ProductGrid TileGrid={'Top DSLR'}/>
        <ProductGrid TileGrid={'Top Microless'}/>
        <ProductGrid TileGrid={'Top Lens'}/>

        </Container>
        </>
        
    );
}
export default Content


