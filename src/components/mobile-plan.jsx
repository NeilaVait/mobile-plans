import React, { Component } from 'react';

class MobilePlan extends Component {
  state = {};

  getContractLength() {
    if (this.props.noCommitment === false) {
      return this.props.mobile1.contractLength.commitment;
    }
    return this.props.mobile1.contractLength.noCommitment;
  }

  getContractPrice() {
    if (this.props.noCommitment === false) {
      return this.props.mobile1.price.commitment;
    }
    return this.props.mobile1.price.noCommitment;
  }

  render() {
    const { mobile1: m } = this.props;

    return (
      <div className="mobile-plan">
        <h6 className="plan__header">{m.headerTitle}</h6>
        <h2 className="plan__dataAllow">{m.dataAllowed} GB</h2>
        <small className="plan__dataEu">Iš jų {m.dataEU} GB ES/EEE</small>
        <p className="plan__min-sms">{m.minSms}</p>
        <div className="plan__features">
          <div className="hr"></div>
          <ul className="features__list">
            {(m.features || []).map((f) => (
              <li key={f.title}>{f.title}</li>
            ))}
          </ul>
        </div>
        <div className="hr"></div>
        <div className="plan__bottom">
          <div className="bottom__price-part">
            <h3 className="bottom__price">
              {m.price && this.getContractPrice()} <span>€/mėn.</span>{' '}
            </h3>
            <small className="bottom__term">{m.contractLength && this.getContractLength()}</small>
          </div>
          <button className="plan__cta">{m.ctaButton}</button>
        </div>
      </div>
    );
  }
}

export default MobilePlan;
