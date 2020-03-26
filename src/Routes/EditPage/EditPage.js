import * as React from 'react';
import "./EditPage.css";
import CrackText from "../../Component/CrackText/CrackText";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import alertDialog2 from "../../services/AlertDialog2";
import {insertWriting, updateUserTier} from "../../services/DataService";
import eventService from "../../services/EventService";
import alertDialog from "../../services/AlertDialog";

export default class EditPage extends React.Component {

  constructor(props) {
    super(props);
    this.editTitleInput = React.createRef();
    this.state = {
      crackTitleTextPercent: 100,
      contents: ""
    };
  }

  componentDidMount() {
    if(!JSON.parse(localStorage.getItem("loginUserInfo"))) {
      alertDialog.show("경고", "로그인 후 이용해 주세요.");
      this.props.history.push("/");
    } else {
      setTimeout(() => this.setState({crackTitleTextPercent: 0}), 100);
      document.addEventListener("scroll", this.changePercent.bind(this));
    }
  }

  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  changePercent = () => {
    if (this.state) {
      this.setState({crackTitleTextPercent: window.pageYOffset * 100 / 300});
    }
  };

  postWritingEvent = () => {
    if (this.state.contents === "" || this.editTitleInput.current.value.trim() === "") {
      alertDialog2.show("잠깐만!", "빈 부분이 있으면 안 됩니다.");
    } else {
      let data = {
        useridx: JSON.parse(localStorage.getItem("loginUserInfo")).idx,
        title: this.editTitleInput.current.value.trim(),
        contents: escape(this.state.contents),
      };
      insertWriting(data, (res) => {
        // console.log(res);
        if(res.result) {
          updateUserTier(data.useridx, (ress) => {
            console.log(ress);
            if(ress.data) {
              localStorage.setItem("loginUserInfo", JSON.stringify(ress.data));
              eventService.emitEvent("updateLoginUserInfoToMyFooter", ress.data);
              eventService.emitEvent("changeIconToMyLeftHeader");
            }
          });
          alertDialog2.show("문서 작성 안내",
            "성공적으로 문서를 작성했습니다. 해당 문서는 왼쪽 헤더에 돋보기 아이콘을 클릭하여 검색할 수 있습니다.");
          this.editTitleInput.current.value = "";
          this.props.history.push("/");
        }
      });
    }
  };

  render() {
    const ckfinderUrl = "/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json";
    return (
      <div className="editPage page">
        <div className="editPage__head">
          <div className="home-hero__logo" onClick={() => this.props.history.push("/")}/>
          <br/>
          <CrackText textClass="editPage__title" textName="Let's fill in a document."
                     crackPercent={this.state.crackTitleTextPercent}/>
          {/*  Let's fill in a document.*/}
        </div>
        <div className="editPage__body">
          <div className="editPage__body_margin">
            <br/><br/><br/><br/>
            <div className="uk-margin">
              <input className="uk-input" type="text" placeholder="Title" ref={this.editTitleInput}/>
            </div>
            <CKEditor
              editor={ClassicEditor}
              config={{ckfinder: {uploadUrl: ckfinderUrl}}}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                // console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({contents: data});
                // console.log({event, editor, data});
              }}
              onBlur={(event, editor) => {
                // console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                // console.log('Focus.', editor);
              }}
            />
            <button className="uk-button uk-button-secondary" style={{float: "right", marginTop: "10px"}}
                    onClick={this.postWritingEvent}>SAVE
            </button>
          </div>
        </div>
      </div>
    );
  };
};