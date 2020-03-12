import * as React from 'react';
import "./OrangeSection.css";
import CrackText from "../../../Component/CrackText/CrackText";

export default class OrangeSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainCrackTextPercent: 100,
    };

  }

  componentDidMount() {
    document.addEventListener("scroll", this.changePercent.bind(this));
  }

  changePercent = () => {
    // console.log(window.pageYOffset);
    let orangeSection = document.querySelector(".orangeSection");
    if(this.state && orangeSection && window.pageYOffset+window.innerHeight > orangeSection.offsetTop) {
      this.setState({mainCrackTextPercent: 0});
    } else {
      this.setState({mainCrackTextPercent: 100});
    }
  };


  render() {
    return (
      <div className="orangeSection sectionStyle">
        <div className="home-discover__inner">
          <div className="home-discover__title_wrap">
            <CrackText textClass="home-discover__title" textName="DISCOVER" crackPercent={this.state.mainCrackTextPercent}/>
          </div>
          <div className="locations__container">
            <div className="locations__wrapper">
              <div className="locations__single">
                <div className="locations__image intrinsic" style={{backgroundImage: `URL('${"/image/class_image1.jpg"}')`}}/>
                <span className="locations__address">
                  <strong>HOF</strong>
                    Groot Heiligland 62<br/>2011 ES Haarlem
                </span>
              </div>
              <div className="locations__single">
                <div className="locations__image intrinsic" style={{backgroundImage: `URL('${"/image/class_image7.jpg"}')`}}/>
                <span className="locations__address">
                  <strong>HOF</strong>
                    Groot Heiligland 62<br/>2011 ES Haarlem
                </span>
              </div>
            </div>
            <div className="locations__title">One museum two locations</div>
            <div className="locations__copy">Welcome to the Frans Hals Museum. One museum at two locations. With old art
              from the 16th and 17th centuries, modern and contemporary art and a stimulating mix of both.
            </div>
          </div>
        </div>
      </div>
    );
  };
};