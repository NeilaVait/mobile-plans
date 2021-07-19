import React, { Component } from 'react';

class MobilePlan extends Component {
  state = {};

  render() {
    return (
      <div className="mobile-plan">
        <h6 className="plan__header">{this.props.mobile1.headerTitle}</h6>
        <h2 className="plan__dataAllow">{this.props.mobile1.dataAlowed} GB</h2>
        <small className="plan__dataEu">Iš jų {this.props.mobile1.dataEU} GB ES/EEE</small>
        <p className="plan__min-sms">Neribotos MIN ir SMS</p>
        <div className="plan__features">
          <div className="hr"></div>
          <ul className="features__list">
            {/* {this.props.mobile1.features.map((f) => (
              <li>{f}</li>
            ))} */}
          </ul>
        </div>
        <div className="hr"></div>
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
