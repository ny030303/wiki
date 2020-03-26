import * as React from 'react';
import styled from "styled-components";
import Calendar from 'react-calendar';
import SplitText from 'react-pose-text';
import "./SchedulePage.css";
import {getDateSchedule} from "../../../services/DataService";

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
      scheduleData: []
    };
    this.contents = React.createRef();
  }


  componentDidMount() {
    this.changeSchedules(new Date().toISOString().substr(0, 10));
    setTimeout(() => this.contents.current.style.left = 0, 100);

  }

  componentWillUnmount() {
    this.contents.current.style.left = "-517px";
  }

  onChange = date => {
    // console.log(date);
    // console.log(new Date(date.toString().replace('GMT+0900', 'GMT+0000')).toISOString());
    let nowDate = new Date(date.toString().replace('GMT+0900', 'GMT+0000')).toISOString();
    this.changeSchedules(nowDate.substr(0, 10));
  };

  changeSchedules = (date) => {
    getDateSchedule(date, (res) => {
      // console.log(res.data);
      if(res.data) {
        this.setState({scheduleData: res.data});
      }
    });
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
          {
            this.state.scheduleData.map((v, i) =>
              (
                <div key={i} className="popupPage__schedule">
                  <div className="popupPage__schedule_date">{v.start_datetime.substr(11, 5)} - {v.end_datetime.substr(11, 5)}</div>
                  <div className="popupPage__schedule_name">
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                      {v.title}
                    </SplitText>
                  </div>
                  <div className="popupPage__schedule_place">{v.place_name}</div>
                </div>
              )
            )
          }

        </div>

      </div>
    );
  };
};