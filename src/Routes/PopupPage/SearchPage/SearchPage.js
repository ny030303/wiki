import * as React from 'react';
import "./SearchPage.css";
import RoundInput from "../../../Component/RoundInput/RoundInput";

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

export default class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.contents = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => this.contents.current.style.left = 0, 100);
  }

  // componentWillUnmount() {
  //   this.contents.current.style.left = "-517px";
  //
  // }

  render() {
    return (
      <div className="popupPage__contents" ref={this.contents} style={{backgroundColor: "#6fab9e", overflowY:"hidden"}}>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="searchPage__title">What are you looking for?</div>
        <div className="searchPage__input_wrap">
          <RoundInput/>
        </div>
        <br/><br/>
        <div className="searchPage__suggested_query_wrap">
          <div className="searchPage__suggested_query">최선한</div>
          <div className="searchPage__suggested_query">기능반</div>
          <div className="searchPage__suggested_query">4실</div>

          <div className="searchPage__suggested_query">4실</div>
          <div className="searchPage__suggested_query">4실</div>
          <div className="searchPage__suggested_query">기능반</div>
          <div className="searchPage__suggested_query">기능반</div>
          <div className="searchPage__suggested_query">기능반</div>
          <div className="searchPage__suggested_query">기능반</div>
          <div className="searchPage__suggested_query">기능반</div>
          <div className="searchPage__suggested_query">기능반</div>
          <div className="searchPage__suggested_query">기능반</div>
        </div>

      </div>
    );
  };
};