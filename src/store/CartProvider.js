import CartContext from "./CartContext";

const CartProvider = (props) => {
    const addtoCartHandler = (item) => {}
    const removetoCartHandler = (id) => {}
    const CartData = {
        items: [],
        amount: 0,
        addToCart : addtoCartHandler,
        removeToCart: removetoCartHandler
    }
    return(
    <CartContext.Provider value={CartData}>
        {props.children}
    </CartContext.Provider>
    )}

    export default CartProvider