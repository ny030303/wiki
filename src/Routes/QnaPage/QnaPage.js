import * as React from 'react';
import "./QnaPage.css";
import MyQnaTable from "../../Component/MyQnaTable/MyQnaTable";
import CrackText from "../../Component/CrackText/CrackText";
import eventService from "../../services/EventService";
import QnaPageEditor from "./QnaPageEditor/QnaPageEditor";
import alertDialog from "../../services/AlertDialog";
import QnaPageItem from "./QnaPageItem/QnaPageItem";

export default class QnaPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainCrackTextPercent: 100,
      isShowQnaEditor: false,
      isShowQnaItemPopup: false
    };
    this.loginUserInfo = JSON.parse(localStorage.getItem("loginUserInfo"));
  }

  componentDidMount() {
    eventService.emitEvent("panoramaState", true);
    setTimeout(() => this.setState({mainCrackTextPercent: 0}), 100);

  }

  componentWillUnmount() {
    eventService.emitEvent("panoramaState", false);
  }

  clickTableItem = () => {
    this.showQnaItemPopup();
  };

  showQnaEditor = () => {
    console.log(this.loginUserInfo);
    if(!this.loginUserInfo) {
      alertDialog.show("경고", "로그인 후 이용해 주세요.");
    } else {
      this.setState({isShowQnaEditor: !this.state.isShowQnaEditor});
    }
  };

  showQnaItemPopup = () => {
    this.setState({isShowQnaItemPopup: !this.state.isShowQnaItemPopup});
  };

  render() {
    return (
      <div className="qnaPage page">
        {
          (this.state.isShowQnaEditor) ? <QnaPageEditor showQnaEditor={this.showQnaEditor} userIdx={this.loginUserInfo.idx}/> : null
        }

        {
          (this.state.isShowQnaItemPopup) ? <QnaPageItem showQnaItemPopup={this.showQnaItemPopup} /> : null
        }

        <div className="qnaPage__head">
          <div className="home-hero__logo" onClick={() => this.props.history.push("/")}/>
          <br/><br/><br/><br/>
          {/*<CrackText textClass="editPage__title" textName="Let's fill in a document."*/}
          {/*           crackPercent={this.state.crackTitleTextPercent}/>*/}
          {/*  Let's fill in a document.*/}

          <CrackText textClass="qnaPage__title" textName="Q&A place" crackPercent={this.state.mainCrackTextPercent}/>
          {/*<div className="qnaPage__title">PRODUCT Q&A</div>*/}
        </div>

        <div className="qnaPage__body">
          <div className="qnaPage__body_margin">
            <ul className="qnaPage__ul">
              <li>이 곳은 질문을 남기고 답변을 받는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 지워질 수 있습니다.</li>
              <li>수업내용 관련 문의 및 요청사항은 최선한 선생님께 1:1로 문의 해주세요..</li>
            </ul>
            <MyQnaTable clickTableItem={this.clickTableItem}/>

            <ul className="uk-pagination uk-flex-center" uk-margin>
              <li>〈</li>
              <li><a href="#">1</a></li>
              <li className="uk-disabled"><span>...</span></li>
              <li><a href="#">5</a></li>
              <li><a href="#">6</a></li>
              <li className="uk-active"><span>7</span></li>
              <li><a href="#">8</a></li>
              <li>〉</li>
            </ul>

            <button className="uk-button uk-button-secondary" style={{float: "right"}} onClick={this.showQnaEditor}>질문
              작성
            </button>
          </div>
        </div>


      </div>
    );
  };
};