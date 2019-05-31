import React from 'react';
import PropTypes from 'prop-types';

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

Nav.propTypes = {
  pairsInfo: PropTypes.arrayOf(PropTypes.object),
  handlePairChange: PropTypes.func,
};

Nav.defaultProps = {
  pairsInfo: [],
  handlePairChange: () => {},
};

export default Nav;
