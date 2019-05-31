import React from 'react';

const Asks = ({ askData }) => (
  <div>
    {
      askData.map(ask => (
        <div>
          <div>{ask[0]}</div>
          <div>{ask[1]}</div>
        </div>
      ))
    }
  </div>
);

export default Asks;
