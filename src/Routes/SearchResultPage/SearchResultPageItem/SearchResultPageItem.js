import * as React from 'react';
import "./SearchResultPageItem.css";
import FontAwesome from "react-fontawesome";

export default class SearchResultPageItem extends React.Component {

  constructor(props) {
    super(props);
    this.contents = React.createRef();

    // {unescape(info.contents)}
  }
  componentDidMount() {
    if(this.contexts) {
      this.contents.current.innerHTML = unescape(this.props.info.contents);
    }
  }

  render() {
    const {info} = this.props;

    return (
      <div className="searchResultPage__result">
        <FontAwesome
          className=""
          name={"file"}
          style={{fontSize: '18px'}}
        />
        <div className="searchResultPage__result_title">{info.title}</div>
        <div className="searchResultPage__result_text" ref={this.contents}/>
      </div>
    );
  };
};