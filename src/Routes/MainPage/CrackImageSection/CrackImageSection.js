import * as React from 'react';
import "./CrackImageSection.css";
import mySvg from '../../../Component/SVG/playBlack.svg';
import $ from "jquery";

export default class CrackImageSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSticky: false
    };
  }


  componentDidMount() {
    document.addEventListener("scroll", this.setIsSticky.bind(this));
  }

  setIsSticky = () => {
    // console.log(window.pageYOffset, document.querySelector(".orangeSection").offsetTop);
    if(this.state && window.pageYOffset >= document.querySelector(".orangeSection").offsetTop) {
      this.setState({isSticky: true});
    } else {
      this.setState({isSticky: false});
    }
  };

  render() {
    return (
      <div className={`crackImageSection split-artpieces ${this.state.isSticky ? "is-sticky" : null}`}>
        <div className="split-artpieces__inner">
          <div className="split-artpiece" style={{backgroundImage: `url("/image/example.jpg")`}}/>
          <div className="split-artpiece__play_btn">
            <img src={mySvg}/>
          </div>
          <div className="split-artpiece" style={{backgroundImage: `url("/image/example2.jpg")`}}/>
        </div>
      </div>
    );
  };
};