import $ from "jquery"
import * as React from "react";
import eventService from "../../../services/EventService";
import UkCommentItem from "./UkCommentItem";
import {insertQnaAnswer, updateUserTier} from "../../../services/DataService";
import alertDialog from "../../../services/AlertDialog";

export default class QnaPageItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qnaPageItemInfo: {},
    };
    this.contents = React.createRef();
    eventService.listenEvent("sendInfoToQnaPageItem", data => {
      console.log(data);
      this.setState({qnaPageItemInfo: data});
    })
  }

  componentDidMount() {
    setTimeout(() => $('#modal-close-default').addClass("uk-open"), 100);
  }

  answerEvent = () => {
    let loginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
    let data = {
      id: this.state.qnaPageItemInfo.id,
      answer_idx: loginUserInfo.idx,
      answer_contents: this.contents.current.value,
    };

    insertQnaAnswer(data, (res) => {
      if (res.result) {
        this.props.closeQnaItemPopup();
        this.props.updateQnaItem();
        updateUserTier(loginUserInfo.idx, (ress) => {
          if (ress.data) {
            localStorage.setItem("loginUserInfo", JSON.stringify(ress.data));
            eventService.emitEvent("updateLoginUserInfoToMyFooter", ress.data);
            eventService.emitEvent("changeIconToMyLeftHeader");
          }
        });


        alertDialog.show("Q&A 답변 안내", "정상적으로 Q&A 답변 됐습니다.");
      }
      else {
        alertDialog.show("오류!", "Q&A 답변에 실패했습니다.");
      }
    });
  };

  render() {
    const {qnaPageItemInfo} = this.state;
    let userInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
    return (
      <div id="modal-close-default" className="uk-modal" style={{display: "block"}} uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                  onClick={this.props.closeQnaItemPopup}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h2 className="uk-modal-title">{qnaPageItemInfo.title}</h2>
          <ul className="uk-comment-list">
            <li>
              <UkCommentItem name={qnaPageItemInfo.writer_name}
                             created={qnaPageItemInfo.created}
                             contents={qnaPageItemInfo.contents}/>

              {
                (() => {
                  if (!qnaPageItemInfo.answer_idx) {
                    if (qnaPageItemInfo.writer_idx !== userInfo.idx && Number(userInfo.tier) >= 2) {
                      return (
                        <div>
                          <div style={{margin: "20px"}}/>
                          <div className="uk-margin flexCenter">
                        <textarea className="uk-textarea" rows="5" placeholder="답변 내용을 입력하세요" ref={this.contents}
                                  style={{width: "430px", height: "39px", resize: "none"}}/>
                            <button className="uk-button uk-button-secondary uk-button-small"
                                    style={{marginLeft: "6px"}} onClick={this.answerEvent}>답변하기
                            </button>
                          </div>

                        </div>
                      );
                    }
                  }
                  else {
                    return (
                      <ul style={{paddingLeft: "60px"}}>
                        <li>
                          <UkCommentItem name={qnaPageItemInfo.answer_name}
                                         created={qnaPageItemInfo.answer_created}
                                         contents={qnaPageItemInfo.answer_contents}
                                         classNames="uk-comment-primary"/>
                        </li>
                      </ul>
                    )
                  }
                })()
              }
            </li>
          </ul>
        </div>
      </div>
    )
  };
}