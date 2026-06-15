
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { CheckoutHeader } from './CheckoutHeader';
import './checkout.css';

import { OrderSumarry } from './OrdersSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart, loadCart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get('/api/payment-summary')
         setPaymentSummary(response.data);
    };
    
    fetchCheckoutData();
  }, [cart])

  useEffect(()=>{
    const deliveryData = async ()=> {
      let response = await  axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
        setDeliveryOptions(response.data);
    };
    deliveryData();
  },[]);

  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSumarry cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
        </div>
      </div>
    </>
  );
}