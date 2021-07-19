import React, { Component } from 'react';

class MobilePlan extends Component {
  state = {};

  render() {
    return (
      <div className="mobile-plan">
        <h6 className="plan__header">Mobilus START 1</h6>
        <h1 className="plan__dataAllow">1 GB</h1>
        <small className="plan__dataEu">Iš jų 1 GB ES/EEE</small>
        <p className="plan__min-sms">Neribotos MIN ir SMS</p>
        <div className="plan__features">sarasas</div>
        <div className="plan__bottom">
          <div className="bottom__price-part">
            <h2>9,90 €/mėn.</h2>
            <small>24 mėn. sutartis</small>
          </div>
          <button className="plan__cta">Domina</button>
        </div>
      </div>
    );
  }
}

export default MobilePlan;
