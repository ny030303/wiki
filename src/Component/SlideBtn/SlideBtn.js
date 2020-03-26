import * as React from 'react';
import "./SlideBtn.css";
import FontAwesome from "react-fontawesome";

export default class SlideBtn extends React.Component {
  render() {
    const {btnColors, hoverBtnColors, textName} = this.props;
    return (
      <div
        className={`ticket-visit-button ticket-visit-button--top ${this.props.className ? this.props.className : null}`}
        style={btnColors}
        onClick={this.props.btnClickEvent}>
        {
          this.props.iconArrow === "left" ?
            (<FontAwesome
              className="slideBtnIcon"
              name="location-arrow"
              style={{transform: "rotate(-133deg)", marginRight: "30px", zIndex: 5}}
            />) : null
        }

        <div style={{zIndex: 5}}>{textName}</div>
        {
          this.props.iconArrow === "right" ?
            (<FontAwesome
              className="slideBtnIcon"
              name="location-arrow"
              style={{transform: "rotate(43deg)", marginLeft: "30px", zIndex: 5}}
            />) : null
        }
        <div className="hover" style={hoverBtnColors}/>
      </div>
    );
  };
};