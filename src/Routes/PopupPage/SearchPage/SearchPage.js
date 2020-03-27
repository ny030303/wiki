import * as React from 'react';
import "./SearchPage.css";
import RoundInput from "../../../Component/RoundInput/RoundInput";
import {withRouter} from "react-router-dom";

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

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.contents = React.createRef();
    this.searchInput = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => this.contents.current.style.left = 0, 100);
    this.searchInput.current.addEventListener("keypress", e => e.keyCode === 13 ? this.searchEvent() : {});
  }

  // componentWillUnmount() {
  //   this.contents.current.style.left = "-517px";
  //
  // }

  searchEvent = () => {
   this.props.history.push("/search/" + this.searchInput.current.value);
    this.props.closePopup();
  };

  render() {
    return (
      <div className="popupPage__contents" ref={this.contents} style={{backgroundColor: "#6fab9e", overflowY:"hidden"}}>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="searchPage__title">What are you looking for?</div>
        <div className="searchPage__input_wrap">
          <RoundInput inputRef={this.searchInput} searchEvent={this.searchEvent}/>
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
}

export default withRouter(SearchPage);