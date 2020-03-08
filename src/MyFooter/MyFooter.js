import * as React from 'react';
import "./MyFooter.css";

export default class MyFooter extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="myFooter">
          <div className="footer-newsletter">
            <h3 className="footer-newsletter__subtitle">Newsletter</h3>
            <div className="footer-newsletter__title">Frans likes to send you emails</div>
          </div>
        </div>
      </div>
    );
  };
};