import React, { Component } from 'react';

class MobilePlan extends Component {
  state = {};

  render() {
    return (
      <div className="mobile-plan">
        <h6 className="plan__header">Mobilus START 1</h6>
        <h2 className="plan__dataAllow">1 GB</h2>
        <small className="plan__dataEu">Iš jų 1 GB ES/EEE</small>
        <p className="plan__min-sms">Neribotos MIN ir SMS</p>
        <div className="plan__features">sarasas</div>
        <div className="plan__bottom">
          <div className="bottom__price-part">
            <h3 className="bottom__price">
              9,90 <span>€/mėn.</span>{' '}
            </h3>
            <small className="bottom__term">24 mėn. sutartis</small>
          </div>
          <button className="plan__cta">Domina</button>
        </div>
      </div>
    );
  }
}

export default MobilePlan;
