import React from 'react';

const Nav = ({ pairsInfo, handlePairChange }) => (
  <div>
    <select onChange={e => handlePairChange(e)}>
      {pairsInfo.map((pair, index) => {
        const { name, url_symbol } = pair;
        return <option value={url_symbol} key={index.toString()}>{name}</option>;
      })}
    </select>
  </div>
);

export default Nav;
