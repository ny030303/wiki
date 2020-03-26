import * as React from 'react';
import "./YellowSection.css";
import Slider from "react-slick";
import CrackText from "../../../Component/CrackText/CrackText";
import SlideBtn from "../../../Component/SlideBtn/SlideBtn";

export default class YellowSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainCrackTextPercent: 100,
    };

  }


  componentDidMount() {
    setTimeout(() => this.setState({mainCrackTextPercent: 0}), 100);
    document.addEventListener("scroll", this.changePercent.bind(this));
  }

  changePercent = () => {
    if(this.state) {
      this.setState({mainCrackTextPercent: window.pageYOffset * 100 / 300});
    }
  };

  render() {
    let settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 8000
    };
    return (
      <div className="yellowSection">
        <div className="home-hero">
          <div className="home-hero__inner">
            <div className="home-hero__logo"/>
            <div style={{marginBottom: "1em"}}>

              <CrackText textClass="home-hero__title" textName="WELECOME" crackPercent={this.state.mainCrackTextPercent}/>
              <Slider {...settings}>
                <div className="viewportText">손 씻기, 마스크 착용하고 외출을 자제해서 코로나19를 예방합시다.</div>
                <div className="viewportText">바로 아래에 사진들을 누르시면 기능반 실습실이나 학교를 구경할 수 있습니다.</div>
                <div className="viewportText">더는 공지 할 것이 없어보임니다. 바이러스 주의하세요</div>
              </Slider>
            </div>

          </div>
          <div className="top-wrapper">
            <SlideBtn btnColors={{backgroundColor: "#231f20", color: "#fce373"}}
                      hoverBtnColors={{backgroundColor: "#caa498", color: "#231f20"}}
                      textName="Buy tickets" className="yellowMainSlideBtn" iconArrow="left"/>
          </div>
        </div>
      </div>
    );
  };
};