import Header from "./components/Layout/Header";
import { useState } from 'react'
import Meals from "./components/Meals/Meals";
import CartItem from "./components/Cart/CartItem";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const CartVisibleHandler = () => {
    console.log('hello')
    setCartIsShow(true);
  };
  const cartInVisibleHnadler = () => {
    setCartIsShow(false)
  };
  return (
    <CartProvider>
      {cartIsShow && <CartItem onHideCart={cartInVisibleHnadler} />}
      <Header onShowCart={CartVisibleHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
