import * as React from 'react';
import "./MyNewsBox.css";
import SplitText from 'react-pose-text';
import FontAwesome from "react-fontawesome";
import newspaper from "../Component/SVG/newspaper.svg";
import MyNewsBoxItem from "./MyNewsBoxItem/MyNewsBoxItem";

const charPoses = {
  exit: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      delay: charInWordIndex * 30,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1
    })
  }
};

export default class MyNewsBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowBox: false
    };
  }


  showNewBox = () => {
    this.setState({isShowBox: !this.state.isShowBox});
  };


  render() {
    return (
      <div className={`myNewsBox${this.state.isShowBox ? " active" : ""}`}>
        <div className="myNewsBox__contents">
          <MyNewsBoxItem/>
          <MyNewsBoxItem/>
          <MyNewsBoxItem/>
        </div>
        <div className="myNewsBox__bottomBtn" onClick={this.showNewBox}>
          <div className="myNewsBox__bottomBtn_text">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>새 소식&nbsp;&nbsp;</SplitText>
            <FontAwesome
              className=""
              name={"paper-plane"}
              style={{fontSize: '18px'}}
            />
          </div>
        </div>
      </div>
    );
  };
};