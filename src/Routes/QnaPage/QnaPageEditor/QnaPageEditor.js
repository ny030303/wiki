import * as React from 'react';
import "./QnaPageEditor.css";
import alertDialog from "../../../services/AlertDialog";
import {insertQna} from "../../../services/DataService";

export default class QnaPageEditor extends React.Component {

  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.contents = React.createRef();
  }

  QnaWritingEvent = () => {
    if(this.title.current.value.trim() === "" || this.contents.current.value.trim() === "") {
      alertDialog.show("경고", "빈 곳이 있습니다.");
    } else {
      let data = {
        title: this.title.current.value.trim(),
        contents: this.contents.current.value.trim(),
        writer_id: this.props.userIdx
      };

      insertQna(data, (res) => {
        if(res) {
          alertDialog.show("QnA 안내", "Q&A 작성이 완료됐습니다.");
          this.props.showQnaEditor();
          this.props.updateQnaItem();
        } else {
          alertDialog.show("QnA 안내", "Q&A 작성을 실패했습니다.");
        }
      });
    }
  };


  render() {
    return (
      <div className="qnaPageEditor uk-modal uk-open" style={{display: "block"}}>
        <div className="uk-modal-dialog uk-modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={this.props.showQnaEditor}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-stacked-text">제목</label>
            <div className="uk-form-controls">
              <input className="uk-input" id="form-stacked-text" type="text" ref={this.title} placeholder="제목을 입력하세요"/>
            </div>
          </div>
          <div className="uk-margin">
            <textarea className="uk-textarea" rows="5" placeholder="질문 내용을 입력하세요" ref={this.contents} style={{resize: "none"}}/>
          </div>
          <button className="uk-button uk-button-default" onClick={this.QnaWritingEvent}>작성</button>
        </div>
      </div>
    );
  };
};