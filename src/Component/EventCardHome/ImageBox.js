import * as React from 'react';
import styled from 'styled-components';

import "./ImageBox.css";

// https://codepen.io/vulchivijay/pen/yyxyvB
const RevealBorderBox = styled.div`
  transform: translateZ(0);
  backface-visibility: hidden;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-color: ${({borderColor}) => borderColor};
    border-width: ${props => props.direction ? 0 : props.borderWidth}px;
    border-style: solid;
    transition-property: border width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:before {
    border-width: ${props => props.direction ? props.borderWidth : 0}px;
    transform: translateY(0);
  }
`;

// border-width: ${props => props.broderWidth}px;
export class ImageBox extends React.Component {
  render() {
    return (
        <div className="image-box-root" style={{backgroundImage: `url(${this.props.image})`}}>
          <RevealBorderBox className="image-box-inner-clip" direction={false} borderColor={"#9CD08E"} borderWidth={15}/>
        </div>
    );
  };
}