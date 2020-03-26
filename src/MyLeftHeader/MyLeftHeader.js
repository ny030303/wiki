import * as React from 'react';
import "./MyLeftHeader.css";
import FontAwesome from 'react-fontawesome';
import {withRouter} from "react-router-dom";
import App from "../App";
import PopupPage from "../Routes/PopupPage/PopupPage";
import pencil from "../Component/SVG/edit2.svg";
import tierAlert from "./TierAlert";
import eventService from "../services/EventService";
import alertDialog from "../services/AlertDialog";

class MyLeftHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popupPage: null,
      loginUserInfo: JSON.parse(localStorage.getItem('loginUserInfo'))
    };
    this.tierPosition = ["3px", "-27px", "-52px", "-78px", "-104px", "-130px", "-156px", "-182px", "-208px", "-233px"];
    eventService.listenEvent("changeIconToMyLeftHeader", () => {
      this.setState({loginUserInfo: JSON.parse(localStorage.getItem('loginUserInfo'))});
    });
  }


  changePage = (e) => {
    let elm = e.target;
    while (!elm.dataset.page) {
      elm = elm.parentElement;
    }
    if (elm.dataset.page === "question") {
      this.props.history.push("/qna");
    }
    else {
      this.setState({popupPage: elm.dataset.page});
    }
  };

  closePopup = () => this.setState({popupPage: null});

  tierClickEvent = () => {
    tierAlert.show();
  };

  gotoEditPage = () => {

    if (!JSON.parse(localStorage.getItem("loginUserInfo"))) {
      alertDialog.show("경고", "로그인 후 이용해 주세요.");
    }
    else {
      this.props.history.push("/edit");
    }
  };

  render() {
    return (
      <div className="myLeftHeader">
        {
          this.state.popupPage ? <PopupPage page={this.state.popupPage} closePopup={this.closePopup}/> : null
        }

        <div className="myLeftHeader__inner">
          {
            (this.state.loginUserInfo) ?
              (
                <div className="footer-newsletter__user_tier myLeftHeader__tier"
                     style={{backgroundPosition: `0px ${this.tierPosition[this.state.loginUserInfo.tier]}`}}
                     onClick={this.tierClickEvent}/>
              ) : null
          }

          {
            ["calendar", "users"].map((v, i) =>
              (
                <div key={i} className="myLeftHeader__item" data-page={v} onClick={this.changePage}>
                  <div className="animation-icon" title="Hooray!">
                    <FontAwesome
                      className="iconStyle"
                      name={v}
                      style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                    />
                  </div>
                </div>
              )
            )
          }
          <button type="button" id="hamburger" className="button-reset js-toggleMenu"
                  onClick={this.gotoEditPage}
                  style={{backgroundColor: "rgb(252, 227, 115)"}}>
            <img src={pencil} className="hamburger__pencil" alt="pencil"/>
          </button>

          {
            ["search", "question"].map((v, i) =>
              (
                <div key={i} className="myLeftHeader__item" data-page={v} onClick={this.changePage}>
                  <div className="animation-icon">
                    <FontAwesome
                      className="iconStyle"
                      name={v}
                      style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
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

export default withRouter(MyLeftHeader);