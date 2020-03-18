import * as React from 'react';
import "./MyFooter.css";
import LineInput from "../Component/LineInput/LineInput";
import eventService from "../services/EventService";
import alertDialog2 from "../services/AlertDialog2";
import {login, logout} from "../services/DataService";

export default class MyFooter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backColor: "#fce373",
      loginUserInfo: false
    };
    this.idInput = React.createRef();
    this.pwdInput = React.createRef();
    this.tierPosition = ["3px", "-27px", "-52px", "-78px", "-104px", "-130px", "-156px", "-182px", "-208px", "-233px"];
  }

  componentDidMount() {
    login("", "", (res) => {
      let loginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
      if (res.result) {
        if (!loginUserInfo || loginUserInfo.idx !== res.user.idx) {
          logout((res) => {
          });
          localStorage.removeItem('loginUserInfo');
          this.setState({"loginUserInfo": false});
        }
        else {
          this.setState({"loginUserInfo": JSON.parse(localStorage.getItem('loginUserInfo'))});
        }
      }
    });
  }

  componentWillUnmount() {
  }

  loginEvent = () => {
    if (this.idInput.current.value.trim() === "" || this.pwdInput.current.value.trim() === "") {
      alertDialog2.show("로그인 안내", "값이 빈 값이 있습니다.");
    }
    else {
      login(this.idInput.current.value.trim(), this.pwdInput.current.value.trim(), (res) => {
        if (res.result) {
          this.setState({loginUserInfo: res.user});
          localStorage.setItem("loginUserInfo", JSON.stringify(res.user));
          alertDialog2.show("로그인 안내", `반갑습니다. ${res.user.name}님`);
        }
        else {
          alertDialog2.show("로그인 안내", "로그인에 실패했습니다.");
        }
      })
    }
  };

  logoutEvent = () => {
    alertDialog2.show("로그아웃 안내", "로그아웃 됐습니다.");
    this.setState({loginUserInfo: false});
    localStorage.removeItem("loginUserInfo");
    logout((res) => {});
  };


  render() {
    const {loginUserInfo} = this.state;
    return (
      <div className="page">
        <div className="myFooter" style={{backgroundColor: this.state.backColor}}>
          <div className="footer-contents">
            {
              (!loginUserInfo) ?
                (

                  <div className="footer-newsletter">
                    <h3 className="footer-newsletter__subtitle">Newsletter</h3>
                    <div className="footer-newsletter__title">Frans likes to send you emails</div>
                    <br/>
                    <div className="footer-newsletter__input_wrap">
                      <LineInput inputRef={this.idInput} placeHolder="ID" labelFor="loginIdInput"/>
                      <LineInput inputRef={this.pwdInput} placeHolder="Password" labelFor="loginPwdInput"/>
                    </div>
                    <br/>
                    <button className="uk-button uk-button-secondary"
                            style={{margin: "0 auto", display: "block", padding: "0 54px"}}
                            onClick={this.loginEvent}>Login
                    </button>
                  </div>
                ) :
                (
                  <div className="footer-newsletter">
                    <div className="footer-newsletter__user_img"/>
                    <h3 className="footer-newsletter__user_name_wrap">
                      <div className="footer-newsletter__user_tier"
                           style={{backgroundPosition: `0px ${this.tierPosition[loginUserInfo.tier]}`}}/>
                      {loginUserInfo.name}
                    </h3>
                    <div className="footer-newsletter__user_tier_text">진정한 양디인</div>
                    <div className="uk-button-group flexCenter" style={{marginTop: "20px"}}>
                      <button className="uk-button uk-button-secondary" style={{width: "118px"}}>수정</button>
                      <button className="uk-button uk-button-secondary" onClick={this.logoutEvent}>로그아웃</button>
                    </div>
                  </div>
                )
            }
            <div className="footer-location">
              dsfsdsdfsdfsd
            </div>
          </div>
          <div className="footerBottom"/>
        </div>
      </div>
    );
  };
};