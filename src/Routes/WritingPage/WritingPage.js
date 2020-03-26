import * as React from 'react';
import "./WritingPage.css";
import CrackText from "../../Component/CrackText/CrackText";
import {getWriting, insertWriting, updateUserTier, updateWriting} from "../../services/DataService";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import alertDialog2 from "../../services/AlertDialog2";
import eventService from "../../services/EventService";

export default class WritingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      writingInfo: {},
      isEdit: false
    };
// console.log();
    this.contents = React.createRef();
  }

  componentDidMount() {
    this.updateWritingInfo(Number(this.props.match.params.writingId));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps && this.props.match.params.writingId !== prevProps.match.params.writingId) {
      this.updateWritingInfo(this.props.match.params.writingId);
    }
  }

  updateWritingInfo = (writingId) => {
    let data = {id: writingId};
    getWriting(data, (res) => {
      console.log(res.data);
      this.setState({writingInfo: res.data, isEdit: false});
      this.contents.current.innerHTML = unescape(res.data.contents);
      // console.log(unescape(unescape(res.data.contents)));
    });
  };

  editWritingEvent = () => {
    if (this.state.contents === "") {
      alertDialog2.show("잠깐만!", "빈 부분이 있으면 안 됩니다.");
    }
    else {
      let data = {
        id: this.state.writingInfo.id,
        contents: this.state.writingInfo.contents,
      };
      updateWriting(data, (res) => {
        // console.log(res);
        if (res.result) {
          alertDialog2.show("문서 수정 안내", "성공적으로 문서를 수정했습니다.");
          this.props.history.push("/");
        }
        else {
          alertDialog2.show("문서 수정 안내", "문서 수정을 실패했습니다.");
        }
      });
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
                        const data = editor.getData();
                        this.setState({
                          writingInfo: Object.assign(writingInfo, {
                            id: this.state.writingInfo.id,
                            title: this.state.writingInfo.title,
                            contents: escape(data)
                          })
                        });
                      }}
                      data={unescape(writingInfo.contents)}
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
                        <div ref={this.contents}/>
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