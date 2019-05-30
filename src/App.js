import React from 'react';
import axios from 'axios';
import Nav from './components/Nav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tradingPairsInfo: [],
      selectedPair: 'btcusd',
      socket: null,
      data: null,
    };

    this.getPairsInfo = this.getPairsInfo.bind(this);
    this.createWebsocketConnection = this.createWebsocketConnection.bind(this);
    this.changePair = this.changePair.bind(this);
  }

  componentDidMount() {
    this.getPairsInfo();
    this.createWebsocketConnection();
  }

  getPairsInfo() {
    axios.get('https://www.bitstamp.net/api/v2/trading-pairs-info/')
      .then((response) => {
        const { data } = response;
        this.setState({ tradingPairsInfo: data });
      });
  }

  createWebsocketConnection() {
    const { selectedPair } = this.state;
    const subscribeMsg = {
      event: 'bts:subscribe',
      data: {
        channel: `order_book_${selectedPair}`,
      },
    };
    const socket = new WebSocket('wss://ws.bitstamp.net');
    socket.onopen = () => socket.send(JSON.stringify(subscribeMsg));
    socket.onmessage = (message) => {
      const { data } = message;
      this.setState({ data });
    };
    this.setState({ socket });
  }

  changePair(event) {
    const { socket } = this.state;
    const { value } = event.target;
    socket.close();
    this.setState({ selectedPair: value });
    this.createWebsocketConnection();
  }

  render() {
    const { tradingPairsInfo } = this.state;
    return (
      <div className="App">
        {tradingPairsInfo.length ? <Nav pairsInfo={tradingPairsInfo} handlePairChange={this.changePair}/> : null}
      </div>
    );
  }
}

export default App;
