import React from 'react';
import PropTypes from 'prop-types';
import { Selector } from './Styling';

const Nav = ({ pairsInfo, handlePairChange }) => (
  <div>
    <Selector onChange={e => handlePairChange(e)}>
      {pairsInfo.map((pair, index) => {
        const { name, url_symbol } = pair;
        return <option value={url_symbol} key={index.toString()} selected={name === 'BTC/USD' ? 'selected' : null}>{name}</option>;
      })}
    </Selector>
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
