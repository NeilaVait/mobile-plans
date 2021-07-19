import React, { Component } from 'react';
import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobile-plan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noCommitment: false,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Mobiliojo rysio planai</h1>
          <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
          <div className="controls d-flex">
            <Commitment noCommitment={this.state.noCommitment}></Commitment>
            <HaveServices></HaveServices>
          </div>
          <main className="plan-cards">
            <MobilePlan></MobilePlan>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
