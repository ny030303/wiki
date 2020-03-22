import * as React from 'react';
import "./WritingPage.css";
import CrackText from "../../Component/CrackText/CrackText";
import {getWriting} from "../../services/DataService";

export default class WritingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      writingInfo: {},
    };
    // console.log();
    this.contents = React.createRef();
  }

  componentDidMount() {
    this.updateWritingInfo(Number(this.props.match.params.writingId));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps && this.props.match.params.writingId !== prevProps.match.params.writingId) {
      this.updateWritingInfo(this.props.match.params.writingId);
    }
  }

  updateWritingInfo = (writingId) => {
    let data = {id: writingId};
    getWriting(data, (res) => {
      console.log(res.data);
      this.setState({writingInfo: res.data});
      this.contents.current.innerHTML = unescape(res.data.contents);
    });
  };


  render() {
    const {writingInfo} = this.state;
    return (
      <div className="writingPage page">
        <div className="writingPage__head">
          <div className="home-hero__logo" onClick={() => this.props.history.push("/")}/>
          <br/><br/><br/><br/>
          {/*<CrackText textClass="editPage__title" textName="Let's fill in a document."*/}
          {/*           crackPercent={this.state.crackTitleTextPercent}/>*/}
          {/*  Let's fill in a document.*/}
          <div className="writingPage__title">{writingInfo.title}</div>
        </div>
        <div className="writingPage__body">
          <div className="writingPage__body_margin">
            <div className="ck ck-reset ck-editor ck-rounded-corners" role="application" dir="ltr" lang="en">
              <div className="ck ck-editor__main" role="presentation">
                <div className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
                     lang="en" dir="ltr" role="textbox" aria-label="Rich Text Editor, main" style={{backgroundColor: "#9ad18b", border: "0 none"}}>
                  <div ref={this.contents}/>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  };
};