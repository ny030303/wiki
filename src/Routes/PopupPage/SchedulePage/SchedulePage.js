import * as React from 'react';
import styled from "styled-components";

import "./SchedulePage.css";

// const SlideHoverBox = styled.div`
//   width: 350px;
//   height: 50px;
//   border: solid 1px ${props => props.bgColor};
//
//   &:hover {
//     animation: ${animateKeyFrames} 0.5s;
//     background-image: linear-gradient(270deg, ${props => props.bgColor} 100%, white 100%);
//   }
// `;

export default class SchedulePage extends React.Component {

  constructor(props) {
    super(props);
    this.contents = React.createRef();
  }


  componentDidMount() {
    setTimeout(() => this.contents.current.style.left = 0, 100);

  }

  componentWillUnmount() {
    this.contents.current.style.left = "-517px";

  }

  render() {
    return (
      <div className="popupPage__contents" ref={this.contents} style={{backgroundColor: "#f37449"}}>
        <div className="popupPage__title">See what’s going on today</div>
      </div>
    );
  };
};