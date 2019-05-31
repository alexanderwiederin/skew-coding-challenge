import React from 'react';
import Bids from './Bids';
import Asks from './Asks';

const OrderBook = ({ bookData }) => {
  const { bids, asks } = bookData.data;
  return (
    <div>
      {bids ? <Bids bidData={bids} /> : null}
      {asks ? <Asks askData={asks} /> : null}
    </div>
  );
};

export default OrderBook;
