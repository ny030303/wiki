import * as React from 'react';
import "./SearchResultPage.css";
import CrackText from "../../Component/CrackText/CrackText";
import eventService from "../../services/EventService";
import FontAwesome from "react-fontawesome";

export default class SearchResultPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div className="searchResultPage page">
        <div className="searchResultPage__head">
          <div className="home-hero__logo" onClick={() => this.props.history.push("/")}/>
          <br/><br/><br/><br/><br/>
          <div className="searchResultPage__title">"sdfsdfsdf" <span>검색 결과</span></div>
          {/*<CrackText textClass="editPage__title" textName="Let's fill in a document." crackPercent={this.state.crackTitleTextPercent}/>*/}
          {/*  Let's fill in a document.*/}

        </div>
        <div className="searchResultPage__body">
          <div className="searchResultPage__body_margin">
            <div className="searchResultPage__result_wrap">
              <div className="searchResultPage__result">
                <FontAwesome
                  className=""
                  name={"file"}
                  style={{fontSize: '18px'}}
                />
                <div className="searchResultPage__result_title">제목1</div>
                <div className="searchResultPage__result_text">내용 와라랄라 내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라</div>
              </div>
              <div className="searchResultPage__result">
                <FontAwesome
                  className=""
                  name={"file"}
                  style={{fontSize: '18px'}}
                />
                <div className="searchResultPage__result_title">제목2</div>
                <div className="searchResultPage__result_text">내용 와라랄라 내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라내용
                  와라랄라내용 와라랄라 내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라내용 와라랄라</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };
};