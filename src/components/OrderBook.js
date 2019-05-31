import React from 'react';
import TradePosition from './TradePosition';
import { OrderBookContainer } from './Styling';

const OrderBook = ({ bookData }) => {
  const { bids, asks } = bookData.data;
  return (
    <OrderBookContainer>
      {bids ? <TradePosition orderData={bids} orderType="bids" /> : null}
      {asks ? <TradePosition orderData={asks} orderType="asks" /> : null}    
    </OrderBookContainer>
  );
};

export default OrderBook;
