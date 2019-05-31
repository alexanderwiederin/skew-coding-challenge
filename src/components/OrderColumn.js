import React from 'react';

const OrderColumn = ({ orderData, orderType }) => (
  <ul>
    {
      orderData.map(bid => (
        orderType === 'bid'
          ? <li>{`${bid[1]} @ ${bid[0]}`}</li>
          : <li>{`${bid[0]} @ ${bid[1]}`}</li>
      ))
    }
  </ul>
);

export default OrderColumn;
