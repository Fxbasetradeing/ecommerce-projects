import axios from 'axios'
import {Routes, Route} from 'react-router';
import { useState, useEffect } from 'react';

import {HomePage} from './Components/home/HomePage';
import {CheckoutPage} from './Components/checkout/CheckoutPage';
import {OrdersPage} from './Components/orders/OrdersPage';
import {TrackingPage} from './Components/tracking/TrackingPage';
import './App.css'


function App() {

    const [cart, setCartItems] = useState([]);

    const loadCart = async ()=>{
      const response = await axios.get('/api/cart-items?expand=product');
      setCartItems(response.data);
    };

    useEffect(()=>{
      loadCart();
    },[]);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="/orders" element={<OrdersPage cart={cart}/>}/>
      <Route path="tracking" element={<TrackingPage />} />
      

    </Routes>
  )
}

export default App
