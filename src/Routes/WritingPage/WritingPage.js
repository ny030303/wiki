import * as React from 'react';
import "./WritingPage.css";
import {getWritingFromTitle, insertWriting, updateUserTier, updateWriting} from "../../services/DataService";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import alertDialog2 from "../../services/AlertDialog2";
import eventService from "../../services/EventService";
import alertDialog from "../../services/AlertDialog";

const DivInnerHtml = ({html}) => (<div dangerouslySetInnerHTML={{__html: html ? unescape(html) : ""}}></div>);

export default class WritingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      writingInfo: {},
      isEdit: false
    };
  }

  componentDidMount() {
    this.updateWritingInfo(this.props.match.params.title);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps && this.props.match.params.title !== prevProps.match.params.title) {
      this.updateWritingInfo(this.props.match.params.title);
    }
  }

  updateWritingInfo = (title) => {
    let loginUserInfo = JSON.parse(localStorage.getItem("loginUserInfo") || "{}");
    if (loginUserInfo.idx) {
      getWritingFromTitle({title: title}, (res) => {
        console.log(res.data);
        if (res.data) {
          this.setState({writingInfo: res.data, isEdit: false});
        }
        else {
          let writingInfo = {id: -1, title: title, userIdx: "2", contents: ""};
          this.setState({writingInfo: writingInfo, isEdit: true});
        }
      });
    }
    else {
      alertDialog.show('알림', '문서의 신규 등록은 로그인 유저만 가능합니다.');
      this.props.history.goBack();
    }
  };

  editWritingEvent = () => {
    if (this.state.contents === "") {
      alertDialog2.show("잠깐만!", "빈 부분이 있으면 안 됩니다.");
    }
    else {
      let data = {
        id: this.state.writingInfo.id,
        contents: escape(this.state.writingInfo.contents),
      };
      if (Number(data.id) < 0) {
        delete data['id'];
        data.useridx = JSON.parse(localStorage.getItem("loginUserInfo")).idx;
        data.title = this.state.writingInfo.title;
        insertWriting(data, (res) => {
          console.log(res);
          if (res.result) {
            updateUserTier(data.useridx, (insRes) => {
              console.log(insRes);
              if (insRes.data) {
                localStorage.setItem("loginUserInfo", JSON.stringify(insRes.data));
                eventService.emitEvent("updateLoginUserInfoToMyFooter", insRes.data);
                eventService.emitEvent("changeIconToMyLeftHeader");
              }
            });
            alertDialog2.show("문서 작성 안내",
              "성공적으로 문서를 작성했습니다. 해당 문서는 왼쪽 헤더에 돋보기 아이콘을 클릭하여 검색할 수 있습니다.");
            this.state.writingInfo.id = res.id;
            this.setState({writingInfo: this.state.writingInfo, isEdit: false});
          }
        });
      }
      else {
        console.log(data);
        updateWriting(data, (res) => {
          console.log(res);
          if (res.result) {
            alertDialog2.show("문서 수정 안내", "성공적으로 문서를 수정했습니다.");
            this.setState({writingInfo: this.state.writingInfo, isEdit: false});
          }
          else {
            alertDialog2.show("문서 수정 안내", "문서 수정을 실패했습니다.");
          }
        });
      }
    }
  };

  showEditForm = () => {
    this.setState({isEdit: !this.state.isEdit});
  };


  render() {
    const {writingInfo} = this.state;
    // console.log(writingInfo);
    const ckfinderUrl = "/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json";
    return (
      <div className="writingPage page">
        <div className="writingPage__head">
          <div className="home-hero__logo" onClick={() => this.props.history.push("/")}/>
          <br/><br/><br/><br/>
          {/*<CrackText textClass="editPage__title" textName="Let's fill in a document."*/}
          {/*           crackPercent={this.state.crackTitleTextPercent}/>*/}
          {/*  Let's fill in a document.*/}
          <div className="writingPage__title">{writingInfo.title}</div>
          {
            (!this.state.isEdit) ? (<button className="uk-button uk-button-text showEditPageBtn"
                                            onClick={this.showEditForm}>수정</button>) : null
          }

        </div>
        <div className="writingPage__body">
          <div className="writingPage__body_margin">
            {
              (this.state.isEdit) ?
                (
                  <div>
                    <CKEditor
                      editor={ClassicEditor}
                      config={{ckfinder: {uploadUrl: ckfinderUrl}}}
                      onInit={editor => {
                      }}
                      onChange={(event, editor) => {
                        this.state.writingInfo.contents = editor.getData();
                        this.setState({writingInfo: this.state.writingInfo});
                      }}
                      data={writingInfo ? unescape(writingInfo.contents) : ""}
                    />
                    <button className="uk-button uk-button-secondary" style={{float: "right", marginTop: "10px"}}
                            onClick={this.editWritingEvent}>SAVE
                    </button>
                  </div>
                ) : (
                  <div className="ck ck-reset ck-editor ck-rounded-corners" role="application" dir="ltr" lang="en">
                    <div className="ck ck-editor__main" role="presentation">
                      <div
                        className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
                        lang="en" dir="ltr" role="textbox" aria-label="Rich Text Editor, main"
                        style={{backgroundColor: "#9ad18b", border: "0 none"}}>
                        <DivInnerHtml html={writingInfo ? writingInfo.contents : ""}/>
                      </div>
                    </div>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    );
  };
};