import * as React from 'react';
import "./CrackImageSection.css";
import mySvg from '../../../Component/SVG/playBlack.svg';
import $ from "jquery";

export default class CrackImageSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSticky: false,
      isImageChange: false,
      beforeImages: {
        top: "/image/example.jpg",
        bottom: "/image/example2.jpg"
      }
    };
  }


  componentDidMount() {
    document.addEventListener("scroll", this.setIsSticky.bind(this));
  }

  setIsSticky = () => {
    // console.log(window.pageYOffset, document.querySelector(".orangeSection").offsetTop);
    // images position 정하기
    if (this.state && window.pageYOffset >= document.querySelector(".orangeSection").offsetTop
      && window.pageYOffset + window.innerHeight <= document.querySelector(".myFooter").offsetTop) {
      this.setState({isSticky: true});
    }
    else {
      if (window.pageYOffset + window.innerHeight > document.querySelector(".myFooter").offsetTop) {
        this.setState({isSticky: "bottom"});
      }
      else {
        this.setState({isSticky: false});
      }
    }

    if(window.pageYOffset + (window.innerHeight / 2) > document.querySelector(".purpleSection").offsetTop) {
      let images = {
        top: "/image/example.jpg",
        bottom: "/image/example2.jpg"
      };
      this.setState({isImageChange: true, beforeImages: images});
    } else {
      let images = {
        top: "/image/example3.jpg",
        bottom: "/image/example4.jpg"
      };

      this.setState({isImageChange: false, beforeImages: images});
    }
  };

  render() {
    return (
      <div
        className={`crackImageSection split-artpieces ${this.state.isSticky ? this.state.isSticky === "bottom" ? "crackImageBottomStyle" : "is-sticky" : null}`}>
        <div className="split-artpieces__inner">
          <div className="split-artpieces__top" style={{backgroundImage: `url("${this.state.beforeImages.top}")`}}>
            <div className="split-artpiece" style={{backgroundImage: `url("/image/example.jpg")`, top: `${this.state.isImageChange ? "100%" : "0"}`}}/>
            <div className="purple-split-artpiece" style={{backgroundImage: `url("/image/example3.jpg")`, top: `${this.state.isImageChange ? "0" : "100%"}`}}/>
          </div>

          <div className="split-artpiece__play_btn" style={{opacity: `${this.state.isImageChange ? "0" : "100%"}`}}>
            <img src={mySvg}/>
          </div>
          <div className="video-modal__caption" style={{opacity: `${this.state.isImageChange ? "0" : "100%"}`}}>Play video about the Frans Hals Museum</div>
          <div className="split-artpieces__bottom" style={{backgroundImage: `url("${this.state.beforeImages.bottom}")`}}>
            <div className="split-artpiece" style={{backgroundImage: `url("/image/example2.jpg")`, top: `${this.state.isImageChange ? "-100%" : "0"}`}}/>
            <div className="purple-split-artpiece" style={{backgroundImage: `url("/image/example4.jpg")`, top: `${this.state.isImageChange ? "0" : "-100%"}`}}/>
          </div>
        </div>
      </div>
    );
  };
};