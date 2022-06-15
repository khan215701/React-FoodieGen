import Header from "./components/Layout/Header";
import { Fragment } from 'react'
import Meals from "./components/Meals/Meals";
import CartItem from "./components/Cart/CartItem";
function App() {
  return (
    <Fragment>
      <CartItem/>
      <Header />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
