import CartIcon from "../Cart/CartIcon";
import styled from './HeaderCart.module.css'
import { useContext } from "react";
import CartContext from "../../store/CartContext";
const HeaderCart = props => {
    const crtContext = useContext(CartContext)
    const numOfCartItem = crtContext.items.reduce((curNumber, item)=>{
        return curNumber + item.amount
    }, 0)
    return (
        <button className={styled.button} onClick={props.onClick}>
        <span className={styled.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styled.badge}>{numOfCartItem}</span>
        </button>
    )
}

export default HeaderCart;