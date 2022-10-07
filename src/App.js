import React, {useState} from 'react'
import About from './components/about';
import Amazon from './components/amazon'
import MyNavbar from './components/appBar';
import Cart from "./components/cart";
import Landing from './components/landing';
import Review from './components/review';
import Shipping from './components/shipping';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <React.Fragment>
        <MyNavbar setShow={setShow}/>
        <Landing />
        <Shipping />
        <div>
          {show ? <Amazon />: (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )} 
        </div>
        <Review />
        <About />
    </React.Fragment>
  )
}

export default App
