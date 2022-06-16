import React from 'react'
const CartContext = React.createContext({
    items : [],
    amount : 0,
    addToCart: (item) => {},
    removeToCart: (id) => {}
})

export default CartContext