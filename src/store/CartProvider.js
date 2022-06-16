import { useReducer } from 'react';

import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const exitingCartItem = state.items[existingItemIndex]
    let updateItems;
    if(exitingCartItem){
       const updateItem = {
            ...exitingCartItem,
            amount : exitingCartItem.amount + action.item.amount
        }
        updateItems = [...state.items]
        updateItems[exitingCartItem] = updateItem
    } else {
        updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;