import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./CartWidget.css";

export const CartWidget = () =>{

    const [cart] = useContext(CartContext);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="cart-container">
            <img src="/ShoppingCart.svg" alt="Cart image" />
            <p className="mb-0">{totalQuantity}</p>
        </div>
    );
}