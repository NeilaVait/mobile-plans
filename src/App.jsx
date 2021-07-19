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
        <h1>Mobiliojo rysio planai</h1>
        <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
        <div className="controls">
          <Commitment></Commitment>
          <HaveServices></HaveServices>
        </div>
        <main className="plan-cards">
          <MobilePlan></MobilePlan>
        </main>
      </div>
    );
  }
}

export default App;
