import { Button } from "react-bootstrap"
import Cart_Item from "./Cart_Item"
import { useContext } from "react"
import { useCart } from "./Context/CartContext"

const Popup_cart = () => {
    const { cartItem } = useCart()
    console.log(cartItem)
    return (
        <>
            <div className="vh-100 position-fixed top-0 end-0 w-25 shadow p-3 mb-5 bg-body" style={{ zIndex: 1000 }}>
                {
                    cartItem.map((item, idx) => (
                        <Cart_Item 
                        keyitem={idx}
                        nameproduct= {item.name}
                        price= {item.price}
                        />
                    ))
                }
                <div className="position-fixed bottom-0 end-0 mb-3">
                    <Button >Xem Giỏ hàng</Button>
                    <Button>Thanh toán</Button>
                </div>
            </div>
        </>
    )
}

export default Popup_cart