import * as React from 'react';
import "./ClassPeoplePage.css";
import SplitText from "react-pose-text";

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
export default class ClassPeoplePage extends React.Component {

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
      <div className="popupPage__contents" ref={this.contents} style={{backgroundColor: "#a385bd"}}>
        <div className="popupPage__title">2020년 3월 기준</div>
        <div className="popupPage__subtitle">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            CLASS PEOPLE INFOMATION
          </SplitText>
        </div>
        <span className="badge badge-primary classPeople__badge" style={{backgroundColor: "rgb(69, 40, 94)"}}>Teacher</span>
        <br/><br/>

        <div className="classPeople__teacher_wrap">
          <div className="classPeople__teacher_image"/>
          <div className="classPeople__teacher_info">
            <div className="classPeople__teacher_name">
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                최선한
              </SplitText>
            </div>
            <div className="classPeople__teacher_sub_info">기능반의 선생님이며 기능반 내 모든 수업을 맡고 계신 빛나는 분이시다.</div>
          </div>
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#home">1학년</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu1">2학년</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu2">3학년</a>
          </li>
        </ul>

        <div className="tab-content">
          <div  style={{textAlign: "center", marginTop: "20px"}} className="tab-pane container active" id="home">공사중..</div>
          <div  style={{textAlign: "center", marginTop: "20px"}} className="tab-pane container fade" id="menu1">공사중..</div>
          <div  style={{textAlign: "center", marginTop: "20px"}} className="tab-pane container fade" id="menu2">공사중..</div>
        </div>
      </div>
    );
  };
};
