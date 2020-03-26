import * as React from 'react';
import "./OrangeSection.css";
import CrackText from "../../../Component/CrackText/CrackText";

export default class OrangeSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainCrackTextPercent: 100,
    };

  }

  componentDidMount() {
    document.addEventListener("scroll", this.changePercent.bind(this));
  }

  changePercent = () => {
    // console.log(window.pageYOffset);
    let orangeSection = document.querySelector(".orangeSection");
    if(this.state && orangeSection && window.pageYOffset+window.innerHeight > orangeSection.offsetTop) {
      this.setState({mainCrackTextPercent: 0});
    } else {
      this.setState({mainCrackTextPercent: 100});
    }
  };


  render() {
    return (
      <div className="orangeSection sectionStyle">
        <div className="home-discover__inner">
          <div className="home-discover__title_wrap">
            <CrackText textClass="home-discover__title" textName="improve" crackPercent={this.state.mainCrackTextPercent}/>
          </div>
          <div className="locations__container">
            <div className="locations__wrapper">
              <div className="locations__single">
                <div className="locations__image intrinsic" style={{backgroundImage: `URL('${"/image/class_image1.jpg"}')`}}/>
                <span className="locations__address">
                  <strong>World Skills</strong>
                  <span>이전에 기능반은 웹디자인 및 개발 기능대회에도 나갈만큼 학생들의 실력향상에 많은 도움을 줬다.</span>
                </span>
              </div>
              <div className="locations__single">
                <div className="locations__image intrinsic" style={{backgroundImage: `URL('${"/image/class_image7.jpg"}')`}}/>
                <span className="locations__address">
                  <strong>up-to-date Technologies</strong>
                    <span>현재 최신 웹기술을 적극적으로 반영하며, 이를 활용하는 법을 배운다.</span>
                </span>
              </div>
            </div>
            <div className="locations__title">웹개발 기능반의 학습목록</div>
            <div className="locations__copy">
              <ol>
                <li>HTML & CSS 등의 웹 퍼블리싱 기술 연마</li>
                <li>JS, Webpack, Node.js 등의 프론트엔드 기술</li>
                <li>PHP, Java Spring 등의 백엔드 기술</li>
                <li>Python을 활용한 데이터 분석기술</li>
                <div>... ...</div>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  };
};