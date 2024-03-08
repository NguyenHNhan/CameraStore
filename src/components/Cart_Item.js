const Cart_Item = (props) => {
    const { keyitem, price, nameproduct, quantity } = props;
    return (
        <>
            <div className=" row border-bottom rounded p-3" key={keyitem}>


                <div className="col-sm-4 mh-100">
                    <img src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" style={{ height: '100px' }} />
                </div>
                <div className="col-sm-7 ">
                    <h2>{nameproduct}</h2>
                    <div className="row">
                        <h5 className="col-sm-4"> Kho: 5</h5>
                        <input type="number" id="quantity" name="quantity" min="1" max="5" value={`${quantity}`} className="col-sm-3"></input>
                    </div>
                    <h3 >Gia: {price}</h3>


                </div>
                <button className="col-sm-1 bg-primary rounded">
                    123
                </button>
            </div>
        </>
    )
}

export default Cart_Item