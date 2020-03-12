import * as React from 'react';
import "./MyFooter.css";
import LineInput from "../Component/LineInput/LineInput";

export default class MyFooter extends React.Component {

  constructor(props) {
    super(props);
    this.idInput = React.createRef();
    this.pwdInput = React.createRef();
  }


  render() {
    return (
      <div className="page">
        <div className="myFooter">
          <div className="footer-newsletter">
            <h3 className="footer-newsletter__subtitle">Newsletter</h3>
            <div className="footer-newsletter__title">Frans likes to send you emails</div>
            <br/>
            <div className="footer-newsletter__input_wrap">
              <LineInput inputRef={this.idInput} placeHolder="ID" labelFor="loginIdInput"/>
              <LineInput inputRef={this.pwdInput} placeHolder="Password" labelFor="loginPwdInput"/>
            </div>
          </div>
        </div>
      </div>
    );
  };
};