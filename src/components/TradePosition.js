import React from 'react';
import PropTypes from 'prop-types';
import OrderColumn from './OrderColumn';
import { PositionContainer } from './Styling';

const TradePosition = ({ orderData, orderType }) => (
  <PositionContainer>
    <OrderColumn orders={orderData} column={orderType === 'bids' ? 'Amount' : 'Price'} />
    <OrderColumn orders={orderData} column={orderType === 'bids' ? 'Price' : 'Amount'} />
  </PositionContainer>
);

TradePosition.propTypes = {
  orderData: PropTypes.arrayOf(PropTypes.array),
  orderType: PropTypes.string,
};

TradePosition.defaultProps = {
  orderData: [],
  orderType: '',
};

export default TradePosition;
