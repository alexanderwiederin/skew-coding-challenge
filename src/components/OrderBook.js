import React from 'react';
import PropTypes from 'prop-types';
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

OrderBook.propTypes = {
  bookData: PropTypes.shape({
    bids: PropTypes.array,
    ask: PropTypes.array,
  }),
};

OrderBook.defaultProps = {
  bookData: {},
};

export default OrderBook;
