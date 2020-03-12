import * as React from 'react';
import "./EditPage.css";
import LineInput from "../../Component/LineInput/LineInput";
import { Editor } from '@tinymce/tinymce-react';

export default class EditPage extends React.Component {

  constructor(props) {
    super(props);
    this.editTitleInput = React.createRef();
  }

  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  render() {
    return (
      <div className="editPage page">
        <div className="editPage__head">
          <div className="home-hero__logo" onClick={() => this.props.history.push("/")}/>
        </div>
        <div className="editPage__body">
          <div className="editPage__body_margin">
            <br/><br/>
            <div className="uk-margin">
              <input className="uk-input" type="text" placeholder="Title" ref={this.editTitleInput}/>
            </div>
            <Editor
              apiKey="xy9kjvl2dkarpdy7o7gcb2y2xuz9glhujm609wlm45ne8t7f"
              init={{
                height: 700,
                resize: false,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                selector: 'textarea',
                toolbar1:
                  'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat |  link image | help',

                 // change this value according to your html
                toolbar2: ''
              }}
              onEditorChange={this.handleEditorChange}
            />
            <button className="uk-button uk-button-secondary" style={{float: "right", marginTop: "10px"}}>SAVE</button>
          </div>
        </div>
      </div>
    );
  };
};