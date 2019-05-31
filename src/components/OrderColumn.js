import React from 'react';
import { Orders } from './Styling';

const OrderColumn = ({ orders, column }) => (
  <Orders>
    <div>{column}</div>
    {
    orders.map(order => (
      <div>{column === 'Amount' ? Number(order[1]).toFixed(2) : order[0]}</div>
    ))
    }
  </Orders>
);

export default OrderColumn;
