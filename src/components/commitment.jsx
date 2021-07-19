import React, { Component } from 'react';
import CustomRadio from './common/customRadio';

class Commitment extends Component {
  render() {
    return (
      <div className="commitment-component">
        <div className="c__selection">
          <span className="c__select">
            <CustomRadio checked={!this.props.noCommitment} onRadio={this.props.handleRadio}>
              24 men.
            </CustomRadio>
          </span>
        </div>
        <div className="c__selection">
          <span className="c__select">
            <CustomRadio checked={this.props.noCommitment} onRadio={this.props.handleRadio}>
              Be isipareigojimu
            </CustomRadio>
          </span>
        </div>
      </div>
    );
  }
}

export default Commitment;
