import React from 'react';
import PropTypes from 'prop-types';
import { Orders } from './Styling';

const OrderColumn = ({ orders, column }) => (
  <Orders>
    <div>{column}</div>
    {
    orders.map((order, index) => (
      <div key={index.toString()}>{column === 'Amount' ? Number(order[1]).toFixed(2) : order[0]}</div>
    ))
    }
  </Orders>
);

OrderColumn.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.array),
  column: PropTypes.string,
};

OrderColumn.defaultProps = {
  orders: [],
  column: '',
};

export default OrderColumn;
