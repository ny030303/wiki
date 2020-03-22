import * as React from 'react';
import "./SearchResultPage.css";
import CrackText from "../../Component/CrackText/CrackText";
import eventService from "../../services/EventService";
import FontAwesome from "react-fontawesome";
import {getSearchWritings} from "../../services/DataService";
import SearchResultPageItem from "./SearchResultPageItem/SearchResultPageItem";

export default class SearchResultPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchItemInfos: []
    };
  }

  componentDidMount() {
    eventService.emitEvent("panoramaState", true);
    this.updateSearchItemInfos();
  }

  componentWillUnmount() {
    eventService.emitEvent("panoramaState", false);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps && this.props.match.params.text !== prevProps.match.params.text) {
      this.updateSearchItemInfos();
    }
  }

  updateSearchItemInfos = () => {
    let data = {text: this.props.match.params.text};
    getSearchWritings(data, (res) => {
      console.log(res.datas);
      this.setState({searchItemInfos: res.datas});
    });
  };

  render() {
    return (
      <div className="searchResultPage page">
        <div className="searchResultPage__head">
          <div className="home-hero__logo" onClick={() => this.props.history.push("/")}/>
          <br/><br/><br/><br/><br/>
          <div className="searchResultPage__title">"{this.props.match.params.text}" <span>검색 결과</span></div>
          {/*<CrackText textClass="editPage__title" textName="Let's fill in a document." crackPercent={this.state.crackTitleTextPercent}/>*/}
          {/*  Let's fill in a document.*/}

        </div>
        <div className="searchResultPage__body">
          <div className="searchResultPage__body_margin">
            <div className="searchResultPage__result_wrap">
              {
                this.state.searchItemInfos.map((v,i) => (<SearchResultPageItem key={i} info={v}/>))
              }
            </div>
          </div>
        </div>
      </div>
    );
  };
};