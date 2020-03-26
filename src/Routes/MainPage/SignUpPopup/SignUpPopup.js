import * as React from 'react';
import $ from "jquery";
import "./SignUpPopup.css";
import LineInput from "../../../Component/LineInput/LineInput";
import CrackText from "../../../Component/CrackText/CrackText";
import alertDialog from "../../../services/AlertDialog";
import {signup} from "../../../services/DataService";

export default class SignUpPopup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      crackTitleTextPercent: 100,
    };

    this.idInput = React.createRef();
    this.nameInput = React.createRef();
    this.pwdInput = React.createRef();
    this.pwdCheckInput = React.createRef();
  }


  componentDidMount() {
    setTimeout(() => $('#signUp').addClass("uk-open"), 100);
    setTimeout(() => this.setState({crackTitleTextPercent: 0}), 300);
  }

  signUpEvent = () => {
    if (this.idInput.current.value.trim() === "" || this.nameInput.current.value.trim() === ""
      || this.pwdInput.current.value.trim() === "" || this.pwdCheckInput.current.value.trim() === "") {
      alertDialog.show("오류!", "값이 빈 곳이 있습니다.");
    }
    else if (this.pwdInput.current.value.trim() !== this.pwdCheckInput.current.value.trim()) {
      alertDialog.show("오류!", "비밀번호가 일치 하지 않습니다.");
    }
    else {
      let data = {
        id: this.idInput.current.value.trim(),
        pwd: this.pwdInput.current.value.trim(),
        name: this.nameInput.current.value.trim(),
      };

      signup(data, (res) => {
        this.props.closeSignUpEvent();
        if(res.result) {
          alertDialog.show("회원가입 안내", "정상적으로 회원가입 됐습니다.");
        } else {
          alertDialog.show("오류!", "회원가입에 실패했습니다.");
        }

      });
    }
  };


  render() {
    return (
      <div id="signUp" className="uk-modal-full uk-modal" style={{display: "block"}}>
        <div className="uk-modal-dialog" style={{backgroundColor: "#c2e59c"}}>
          <div className="signUp__close" onClick={this.props.closeSignUpEvent}>&times;</div>
          <div className="signup__backImage2" style={{backgroundImage: `URL(${this.props.backImgUrl})`}}>
            <div className="signup__contents">
              <div className="signup_home-hero__logo"/>
              <CrackText textClass="signup__title" textName="Create Account."
                         crackPercent={this.state.crackTitleTextPercent}/>
              <CrackText textClass="signup__sub_title" textName="If you join, you can get a lot of knowledge."
                         crackPercent={this.state.crackTitleTextPercent}/>
              <br/>
              <div className="signup__input_wrap">
                <input className="uk-input signup_input" type="text" maxLength="150" ref={this.idInput} placeholder="Id"/>
                <input className="uk-input signup_input" type="text" maxLength="150" ref={this.nameInput} placeholder="Name"/>
                <input className="uk-input signup_input" type="password" maxLength="150" ref={this.pwdInput} placeholder="Password"/>
                <input className="uk-input signup_input" type="password" maxLength="150" ref={this.pwdCheckInput}
                       placeholder="Password Check"/>
              </div>
              <button className="uk-button uk-button-primary"
                      onClick={this.signUpEvent}
                      style={{margin: "20px auto", display: "block", backgroundColor: "rgb(43, 65, 83)"}}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};