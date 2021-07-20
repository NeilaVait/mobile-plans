import React, { Component } from 'react';

class MobilePlan extends Component {
  state = {};

  formatPrice(price) {
    if (price) return (Math.round(price * 100) / 100).toFixed(2);
  }

  render() {
    const { mobile1: m } = this.props;
    const { noCommitment } = this.props;

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
              {noCommitment ? this.formatPrice(m.price?.noCommitment) : this.formatPrice(m.price?.commitment)}{' '}
              <span>€/{m.period}.</span>{' '}
            </h3>
            <small className="bottom__term">
              {noCommitment ? m.contractLength?.noCommitment : m.contractLength?.commitment}
            </small>
          </div>
          <button className="plan__cta">{m.ctaButton}</button>
        </div>
      </div>
    );
  }
}

export default MobilePlan;
