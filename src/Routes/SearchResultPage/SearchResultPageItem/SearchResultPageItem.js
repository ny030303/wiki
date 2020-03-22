import * as React from 'react';
import "./SearchResultPageItem.css";
import FontAwesome from "react-fontawesome";
import {withRouter} from "react-router-dom";
class SearchResultPageItem extends React.Component {

  constructor(props) {
    super(props);
    this.contents = React.createRef();

    // {unescape(info.contents)}
  }
  componentDidMount() {
    this.contents.current.innerHTML = unescape(this.props.info.contents)
  }

  render() {
    const {info} = this.props;
    return (
      <div className="searchResultPage__result" onClick={() => this.props.history.push(`/writing/${info.id}`)}>
        <FontAwesome
          className=""
          name={"file"}
          style={{fontSize: '18px'}}
        />
        <div className="searchResultPage__result_title">{info.title}</div>
        <div className="searchResultPage__result_text" >
          <div className="ck ck-reset ck-editor ck-rounded-corners" role="application" dir="ltr" lang="en">
            <div className="ck ck-editor__main" role="presentation">
              <div className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
                   lang="en" dir="ltr" role="textbox" aria-label="Rich Text Editor, main"
                   style={{backgroundColor: "#98c8bd", border: "0 none"}} ref={this.contents}>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(SearchResultPageItem);