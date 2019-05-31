import React from 'react';
import OrderColumn from './OrderColumn';
import { PositionContainer } from './Styling';

const TradePosition = ({ orderData, orderType }) => (
  <PositionContainer>
    <OrderColumn orders={orderData} column={orderType === 'bids' ? 'Amount' : 'Price'} />
    <OrderColumn orders={orderData} column={orderType === 'bids' ? 'Price' : 'Amount'} />
  </PositionContainer>
);

export default TradePosition;
