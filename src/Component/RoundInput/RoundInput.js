import * as React from 'react';
import "./RoundInput.css";
import icon from "../../Component/SVG/search.svg"
export  default class RoundInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="roundInput__wrap">
        <input type="text" className="roundInput" ref={this.props.inputRef} placeholder="Just Here..."/>
        <img src={icon} alt="search" className="roundInput__icon"/>
      </div>
    );
  };
};