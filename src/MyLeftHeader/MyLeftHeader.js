import * as React from 'react';
import "./MyLeftHeader.css";
import FontAwesome from 'react-fontawesome';
import {withRouter} from "react-router-dom";
import App from "../App";
import PopupPage from "../Routes/PopupPage/PopupPage";
import pencil from "../Component/SVG/edit2.svg";

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
                  onClick={() => this.props.history.push("/edit")}
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