import Header from "./components/UI/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  //const [cartItems,setCartItems] = useState({});

  const showCartHandler = ()=>{
    setCartIsShown(true);
  }
  const hideCartHandler = ()=>{
    console.log(cartIsShown);
    setCartIsShown(false);

  }
  return (
    <CartProvider>
      {cartIsShown && <Cart cartHide={hideCartHandler}/>}
      <Header cartShow={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
