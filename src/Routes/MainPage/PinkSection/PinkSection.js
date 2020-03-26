import * as React from 'react';
import "./PinkSection.css";
import SlideBtn from "../../../Component/SlideBtn/SlideBtn";
import EventCardHome from "../../../Component/EventCardHome/EventCardHome";
import StyledSlideBtn from "../../../Component/SlideBtn/StyledSlideBtn";
import Slider from "react-slick";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import alertDialog from "../../../services/AlertDialog";


const loadImg = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(null);
    img.src = url;
  });
};


const createImgDataUrl = async (url) => {
  let img = await loadImg(url);
  if (img !== null) {
    let canvas = document.createElement("canvas");
    canvas.setAttribute("width", img.width);
    canvas.setAttribute("height", img.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL();
  }
  return null;
};

export default class PinkSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFadeSignUpPopup: false,
      signUpPopupImgDataUrl: null
    };
  }


  showSignUpEvent = () => {
    let userInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
    if (userInfo) {
      alertDialog.show("안내", "로그아웃 후 이용해 주세요.");
    }
    else {
      createImgDataUrl(`/image/background2.png`).then(imgdataurl => {
        // console.log(imgdataurl)
        this.setState({isFadeSignUpPopup: !this.state.isFadeSignUpPopup, signUpPopupImgDataUrl: imgdataurl});
      });
    }
  };


  render() {
    var settings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 2.2
    };
    return (
      <div className="pinkSection">
        {
          (this.state.isFadeSignUpPopup && this.state.signUpPopupImgDataUrl) ? (
            <SignUpPopup closeSignUpEvent={this.showSignUpEvent} backImgUrl={this.state.signUpPopupImgDataUrl}/>) : null
        }
        <div className="home-exhibition">
          <div className="top-wrapper">
            {/*<StyledSlideBtn bgColor={"#231f20"} style={{}}>*/}
            {/*  ALL EXHIBITIONS*/}
            {/*</StyledSlideBtn>*/}
            <SlideBtn btnColors={{backgroundColor: "#fce373", color: "#231f20"}}
                      hoverBtnColors={{backgroundColor: "#231f20", color: "#fce373"}}
                      textName="GO TO SIGNUP" className="pinkMainSlideBtn" iconArrow="right"
                      btnClickEvent={this.showSignUpEvent}/>
          </div>
          <div className="home-exhibition__inner">
            <div className="home-highlighted-section__card-wrapper">

              <div id="event-card-list">
                <Slider {...settings}>
                  <EventCardHome imageLink="/image/streetview/view1.png" type="view1"/>
                  <EventCardHome imageLink="/image/streetview/view2.png" type="view2"/>
                  <EventCardHome imageLink="/image/streetview/view3.png" type="view3"/>
                  <EventCardHome imageLink="/image/streetview/view4.png" type="view4"/>
                  <EventCardHome imageLink="/image/streetview/view5.png" type="view5"/>
                  {/*<EventCardHome imageLink="/image/streetview/view6.png" type="view6"/>*/}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};