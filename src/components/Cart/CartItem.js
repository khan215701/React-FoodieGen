import styled from "./CartItem.module.css";
import Modal from "../UI/Modal";

const CartItem = (props) => {
  const cartItem = 
    <ul className={styled['cart-items']}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 25.45 }].map((item) => (
        <li> {item.name}</li>
      ))}
    </ul>
  
  return(
  <Modal onClose={props.onHideCart}>
    {cartItem}
    <div className={styled.total}>
      <span>Total Amount</span>
      <span>234.45</span>
    </div>
    <div className={styled.actions}>
      <button className={styled["button--alt"]} onClick={props.onHideCart}>Close</button>
      <button className={styled.button}>Order</button>
    </div>
  </Modal>
  )};

export default CartItem;
