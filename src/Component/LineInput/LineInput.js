import * as React from 'react';
import "./LineInput.css";

export default class LineInput extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-container">
        <input type="text" id={this.props.labelFor} ref={this.props.inputRef} required/>
        <label className="input_placeholder_style" htmlFor={this.props.labelFor}>{this.props.placeHolder}</label>
      </div>
    );
  };
};