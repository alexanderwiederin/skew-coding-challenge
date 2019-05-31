import React from 'react';

const Bids = ({ bidData }) => (
  <div>
    {
      bidData.map(bid => (
        <div>
          <div>{bid[1]}</div>
          <div>{bid[0]}</div>
        </div>
      ))
    }
  </div>
);

export default Bids;
