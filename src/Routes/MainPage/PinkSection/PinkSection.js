import * as React from 'react';
import "./PinkSection.css";
import SlideBtn from "../../../Component/SlideBtn/SlideBtn";
import EventCardHome from "../../../Component/EventCardHome/EventCardHome";
import StyledSlideBtn from "../../../Component/SlideBtn/StyledSlideBtn";

export default class PinkSection extends React.Component {
  render() {
    return (
      <div className="pinkSection">
        <div className="home-exhibition">
          <div className="top-wrapper">
            {/*<StyledSlideBtn bgColor={"#231f20"} style={{}}>*/}
            {/*  ALL EXHIBITIONS*/}
            {/*</StyledSlideBtn>*/}
            <SlideBtn btnColors={{backgroundColor: "#fce373", color: "#231f20"}}
                      hoverBtnColors={{backgroundColor: "#231f20", color: "#fce373"}}
                      textName="ALL EXHIBITIONS" className="pinkMainSlideBtn" iconArrow="right"/>
          </div>
          <div className="home-exhibition__inner">
            <div className="home-highlighted-section__card-wrapper">
              <EventCardHome/>
              <EventCardHome/>
            </div>
          </div>
        </div>
      </div>
    );
  };
};