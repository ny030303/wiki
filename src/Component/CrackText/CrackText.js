import * as React from 'react';
import "./CrackText.css";
export default class CrackText extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    const {textClass, textName, crackPercent} = this.props;
    return (
      <div className={textClass}>
        <div style={{visibility: "hidden"}}>{textName}</div>
        <span className="home-hero__title--half" style={{top: 0}}>
          <span style={{transform: `translate3d(0px, ${crackPercent}%, 0px)`,}}>{textName}</span>
        </span>
        <span className="home-hero__title--half" style={{bottom: 0}}>
          <span style={{transform: `translate3d(0px, -${crackPercent}%, 0px)`, bottom: "100%"}}>{textName}</span>
        </span>
      </div>
    );
  };
};