const Cart_Item = (props) => {
    const  { keyitem, price, nameproduct}  = props;
    return (
        <>
            <div className="row" key={keyitem}>
                <span >x</span>
                <h2>{nameproduct}</h2>
                <div className="col-sm-4">
                    <img src="https://kyma.vn/StoreData/images/Product/may-anh-sony-alpha-ilce6700-a6700-body.webp" style={{ height: '100px' }} />
                </div>
                <div className="col-sm-8">
                    <h3>{price}</h3>
                    <h5 > Số lượng: 5</h5>
                    <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
                </div>

            </div>
        </>
    )
}

export default Cart_Item