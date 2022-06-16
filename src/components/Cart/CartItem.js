import styled from "./CartItem.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartList from "./CartList";

const CartItem = (props) => {
  const ctx = useContext(CartContext)
  const hasCart = ctx.items.length > 0
  const onAddCartHandler = () => {}
  const onRemoveCartHandler = () => {}
  const cartItem = 
    <ul className={styled['cart-items']}>
      {ctx.items.map((item) => (
       <CartList 
            id={item.id} 
            name={item.name} 
            amount= {item.amount} 
            price={item.price} 
            onRemove={onRemoveCartHandler.bind(null, item.id)} 
            onAdd={onAddCartHandler.bind(null, item)}/>
      ))}
    </ul>
  
  return(
  <Modal onClose={props.onHideCart}>
    {cartItem}
    <div className={styled.total}>
      <span>Total Amount</span>
      <span>{ctx.totalAmount}</span>
    </div>
    <div className={styled.actions}>
      <button className={styled["button--alt"]} onClick={props.onHideCart}>Close</button>
      {hasCart && <button className={styled.button}>Order</button>}
    </div>
  </Modal>
  )};

export default CartItem;
