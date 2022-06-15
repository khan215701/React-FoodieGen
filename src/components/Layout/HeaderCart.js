import CartIcon from "../Cart/CartIcon";
import styled from './HeaderCart.module.css'
const HeaderCart = () => {
    return (
        <button className={styled.button}>
        <span className={styled.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styled.badge}>3</span>
        </button>
    )
}

export default HeaderCart;