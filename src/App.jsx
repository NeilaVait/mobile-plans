import React, { Component } from 'react';
import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobile-plan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Commitment></Commitment>
        <HaveServices></HaveServices>
        <MobilePlan></MobilePlan>
      </div>
    );
  }
}

export default App;
