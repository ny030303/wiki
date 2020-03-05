import * as React from 'react';
import "./MyLeftHeader.css";
import FontAwesome from 'react-fontawesome'

export default class MyLeftHeader extends React.Component {
  render() {
    return (
      <div className="myLeftHeader">
        <div className="myLeftHeader__inner">
          {
            ["calendar","ticket"].map((v,i) =>
              (
                <div key={i} className="myLeftHeader__item">
                  <div className="animation-icon" data-toggle="tooltip" data-placement="right" title="Hooray!">
                    <FontAwesome
                      className="iconStyle"
                      name={v}
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </div>
                </div>
              )
            )
          }
          <button type="button" id="hamburger" className="button-reset js-toggleMenu"
                  style={{backgroundColor: "rgb(252, 227, 115)"}}>
            <span id="hamburger__icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
          </button>

          {
            ["search","map-marker"].map((v,i) =>
              (
                <div key={i} className="myLeftHeader__item">
                  <div className="animation-icon">
                    <FontAwesome
                      className="iconStyle"
                      name={v}
                      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
    );
  };
}