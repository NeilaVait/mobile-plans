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
      allPlans: [],
    };
  }

  async componentDidMount() {
    //parsisiunciam plan1 json faila ir issaugom state
    const response = await fetch('/data/plan1.json');
    const data = await response.json();
    this.setState({ mobile1: data });

    const resp = await fetch('/data/allPlans.json');
    const plans = await resp.json();
    this.setState({ allPlans: plans });
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
            {this.state.allPlans &&
              this.state.allPlans.map((p) => (
                <MobilePlan key={p.headerTitle} noCommitment={this.state.noCommitment} mobile1={p}></MobilePlan>
              ))}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
