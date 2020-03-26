import * as React from 'react';
import "./PurpleSection.css";
import CrackText from "../../../Component/CrackText/CrackText";
import FontAwesome from "react-fontawesome";
import {ImageBox} from "../../../Component/EventCardHome/ImageBox";

export default class PurpleSection extends React.Component {

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
    // console.log(window);
    let purpleSection = document.querySelector(".purpleSection");
    if(this.state && purpleSection && window.pageYOffset+window.innerHeight > purpleSection.offsetTop) {
      this.setState({mainCrackTextPercent: 0});
    } else {
      this.setState({mainCrackTextPercent: 100});
    }
  };


  render() {
    return (
      <div className="purpleSection sectionStyle">
        <div className="home-discover__title_wrap">
          <CrackText textClass="home-discover__title" textName="NEW" crackPercent={this.state.mainCrackTextPercent}/>
          <p className="active-line__text">
            <FontAwesome
              className=""
              name="clipboard"
              style={{ marginRight: ".5em" }}
            />
            You can find new information here.
            <div className="active-line__line"/>
          </p>
        </div>

        <div className="home-journal__news-cards">
          <div className="news-card">
            <div className="news-card__thumbnail">
              <ImageBox image={"/image/class_image8.jpg"} imageHeight="8vw" direction={false} borderColor="rgb(249, 160, 78)"/>
            </div>
            <div className="news-card__infos">
              <div className="news-card__post-date"> 17th September 2019</div>
              <h2 className="news-card__title">History of Yangyoung Digital High School</h2>
            </div>
          </div>

          <div className="news-card">
            <div className="news-card__thumbnail">
              <ImageBox image={"/image/class_image6.jpg"} imageHeight="8vw" direction={false} borderColor="rgb(249, 160, 78)"/>
            </div>
            <div className="news-card__infos">
              <div className="news-card__post-date"> 9th September 2019</div>
              <h2 className="news-card__title">Design of Education</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
};