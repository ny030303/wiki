import * as React from 'react';
import "./PinkSection.css";
import SlideBtn from "../../../Component/SlideBtn/SlideBtn";
import EventCardHome from "../../../Component/EventCardHome/EventCardHome";
import StyledSlideBtn from "../../../Component/SlideBtn/StyledSlideBtn";
import Slider from "react-slick";


export default class PinkSection extends React.Component {
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

              <div id="event-card-list">
                <Slider {...settings}>
                  <EventCardHome/>
                  <EventCardHome/>
                  <EventCardHome/>
                  <EventCardHome/>
                  {/*<div>1</div>*/}
                  {/*<div>2</div>*/}
                  {/*<div>3</div>*/}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};