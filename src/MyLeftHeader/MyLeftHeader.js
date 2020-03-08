import * as React from 'react';
import "./MyLeftHeader.css";
import FontAwesome from 'react-fontawesome';
import {withRouter} from "react-router-dom";
import App from "../App";
import PopupPage from "../Routes/PopupPage/PopupPage";

class MyLeftHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popupPage: null
    };
  }


  changePage = (e) => {
    let elm = e.target;
    while (!elm.dataset.page) {
      elm = elm.parentElement;
    }
    this.setState({popupPage: elm.dataset.page});
  };

  closePopup = () => this.setState({popupPage: null});

  render() {
    return (
      <div className="myLeftHeader">
        {
          this.state.popupPage ? <PopupPage page={this.state.popupPage} closePopup={this.closePopup}/> : null
        }
        <div className="myLeftHeader__inner">
          {
            ["calendar", "ticket"].map((v, i) =>
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
                  onClick={() => this.changePage("/")}
                  style={{backgroundColor: "rgb(252, 227, 115)"}}>
            <span id="hamburger__icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
          </button>

          {
            ["search", "map-marker"].map((v, i) =>
              (
                <div key={i} className="myLeftHeader__item">
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