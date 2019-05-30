import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null, 
    };
  }

  render() {
    const { pairsInfo } = this.props; 
    return (
      <div>
        <select>
          {pairsInfo.map((pair, index) => {
            const { name } = pair;
            return <option key={index.toString()}>{name}</option>;
          })}
        </select>
        <button type="submit">Submit!</button>
      </div>
    );
  }
}

export default Nav;
