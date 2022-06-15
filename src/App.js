import Header from "./components/Layout/Header";
import { Fragment, useState } from 'react'
import Meals from "./components/Meals/Meals";
import CartItem from "./components/Cart/CartItem";
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
    <Fragment>
      {cartIsShow && <CartItem onHideCart={cartInVisibleHnadler} />}
      <Header onShowCart={CartVisibleHandler} />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
