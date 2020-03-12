import * as React from 'react';
import styled from "styled-components";
import Calendar from 'react-calendar';
import SplitText from 'react-pose-text';
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

const charPoses = {
  exit: {y: 20, opacity: 0},
  enter: {
    y: 0,
    opacity: 1,
    transition: ({charInWordIndex}) => ({
      type: 'spring',
      delay: charInWordIndex * 30,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1
    })
  }
};

export default class SchedulePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.contents = React.createRef();
  }


  componentDidMount() {
    setTimeout(() => this.contents.current.style.left = 0, 100);

  }

  componentWillUnmount() {
    this.contents.current.style.left = "-517px";
  }

  onChange = date => {
    this.setState({date});
    console.log(date);
  };

  render() {
    return (
      <div className="popupPage__contents" ref={this.contents} style={{backgroundColor: "#f37449"}}>
        <div className="popupPage__title">CALENDAR</div>
        <div className="popupPage__subtitle">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            See what’s going on today
          </SplitText>
        </div>
        <div className="popupPage__calendar_wrap">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
        <div className="popupPage__schedule_wrap">
          <div className="popupPage__schedule">
            <div className="popupPage__schedule_date">10:00AM - 10:45AM</div>
            <div className="popupPage__schedule_name">
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                선한 쌤 도제수업
              </SplitText>
            </div>
            <div className="popupPage__schedule_place">소프트웨어 과 2실</div>
          </div>
        </div>

      </div>
    );
  };
};