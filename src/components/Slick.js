
import Slider from "react-slick";
import ProductClassify from "./ProductClassify";



const Slick = () => {
    const PrevArrow = (props) => {
    const { onClick } = props;
    return <img className="slick-prev d-block" alt="..."  onClick={onClick}/>;
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return <img className="slick-next d-block"   alt="..." onClick={onClick}/>;
  };
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    return (


        <Slider {...settings}  className="mx-4 bg-dark px-2 my-2">
            <ProductClassify nameclassify={'Mrio'}/>
            <ProductClassify/>
         <ProductClassify/>
            <ProductClassify/>
            <ProductClassify/>
            <ProductClassify/>
            <ProductClassify/>
            <ProductClassify/>   

        </Slider>



    );
}

export default Slick
