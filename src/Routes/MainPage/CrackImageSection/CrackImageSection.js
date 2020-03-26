import * as React from 'react';
import "./CrackImageSection.css";
import mySvg from '../../../Component/SVG/playBlack.svg';
import $ from "jquery";

export default class CrackImageSection extends React.Component {

  constructor(props) {
    super(props);
    this.imageList = [
      "/image/class_image5.jpg",
      "/image/class_image11.jpg",
      "/image/class_image10.jpg",
      "/image/class_image9.jpg"
    ];
    this.state = {
      isSticky: false,
      isImageChange: false,
      beforeImages: {
        top: this.imageList[0],
        bottom: this.imageList[1]
      }
    };

  }


  componentDidMount() {
    document.addEventListener("scroll", this.setIsSticky.bind(this));
  }

  setIsSticky = () => {
    // console.log(window.pageYOffset, document.querySelector(".orangeSection").offsetTop);
    // images position 정하기
    let orangeSection = document.querySelector(".orangeSection");
    let myFooter = document.querySelector(".myFooter");
    let purpleSection = document.querySelector(".purpleSection");
    if (this.state && orangeSection && myFooter
      && window.pageYOffset >= orangeSection.offsetTop
      && window.pageYOffset + window.innerHeight <= myFooter.offsetTop) {
      this.setState({isSticky: true});
    }
    else {
      if (myFooter && window.pageYOffset + window.innerHeight > myFooter.offsetTop) {
        this.setState({isSticky: "bottom"});
      }
      else {
        this.setState({isSticky: false});
      }
    }

    if(purpleSection && window.pageYOffset + (window.innerHeight / 2) > purpleSection.offsetTop) {
      let images = {
        top: this.imageList[0],
        bottom: this.imageList[1]
      };
      this.setState({isImageChange: true, beforeImages: images});
    } else {
      let images = {
        top: this.imageList[2],
        bottom: this.imageList[3]
      };

      this.setState({isImageChange: false, beforeImages: images});
    }
  };

  render() {
    return (
      <div
        className={`crackImageSection split-artpieces ${this.state.isSticky ? this.state.isSticky === "bottom" ? "crackImageBottomStyle" : "is-sticky" : null}`}>
        <div className="split-artpieces__inner">
          <div className="split-artpieces__top">
            <div className="split-artpiece" style={{backgroundImage: `url("${this.imageList[0]}")`, top: `${this.state.isImageChange ? "100%" : "0"}`}}/>
            <div className="purple-split-artpiece" style={{backgroundImage: `url("${this.imageList[2]}")`, top: `${this.state.isImageChange ? "0" : "100%"}`}}/>
          </div>

          <a className="split-artpiece__play_btn" href="http://code.gondr.net/" style={{opacity: `${this.state.isImageChange ? "0" : "100%"}`}}>
            <img src={mySvg}/>
          </a>
          <div className="video-modal__caption" style={{opacity: `${this.state.isImageChange ? "0" : "100%"}`}}>Go and watch the previous videos.</div>
          <div className="split-artpieces__bottom" >
            <div className="split-artpiece" style={{backgroundImage: `url("${this.imageList[1]}")`, top: `${this.state.isImageChange ? "-100%" : "0"}`}}/>
            <div className="purple-split-artpiece" style={{backgroundImage: `url("${this.imageList[3]}")`, top: `${this.state.isImageChange ? "0" : "-100%"}`}}/>
          </div>
        </div>
      </div>
    );
  };
};