import React from 'react';
import OrderColumn from './OrderColumn';

const OrderBook = ({ bookData }) => {
  const { bids, asks } = bookData.data;
  return (
    <div>
      {bids ? <OrderColumn orderData={bids} orderType="bid" /> : null}
      {bids ? <OrderColumn orderData={asks} orderType="asks" /> : null}
    </div>
  );
};

export default OrderBook;
