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
                <div className="viewportText">Final weeks: (Hal - Grote Markt): Lubaina Himid & Marianna Simnett</div>
                <div className="viewportText">Now on view (Hof - Groot Heiligland): Haarlem Heroes. Other Masters</div>
                <div className="viewportText">3. Now on view Haarlem</div>
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