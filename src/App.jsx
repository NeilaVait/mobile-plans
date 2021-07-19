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
      mobile1: {},
    };
  }

  async componentDidMount() {
    //parsisiunciam plan1 json faila ir issaugom state
    const response = await fetch('/data/plan1.json');
    this.state.mobile1 = await response.json();
    console.log('data', this.state.mobile1);
  }

  handleRadio = (value) => {
    const stateCopy = { ...this.state };
    if (value === 'commit') {
      stateCopy.noCommitment = false;
    } else {
      stateCopy.noCommitment = true;
    }
    this.setState(stateCopy);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Mobiliojo rysio planai</h1>
          <p>Visos Lietuvoje turimo plano naudos galioja Baltijos ir Skandinavijos šalyse.</p>
          <div className="controls d-flex">
            <Commitment handleRadio={this.handleRadio} noCommitment={this.state.noCommitment}></Commitment>
            <HaveServices></HaveServices>
          </div>
          <main className="plan-cards">
            <MobilePlan mobile1={this.state.mobile1}></MobilePlan>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
