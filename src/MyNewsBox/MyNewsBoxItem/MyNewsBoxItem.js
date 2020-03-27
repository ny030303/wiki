import * as React from 'react';
import "./MyNewsBoxItem.css";
import {withRouter} from "react-router-dom";
class MyNewsBoxItem extends React.Component {

  gotoWritingPage = () => {
    this.props.history.push(`/wiki/${this.props.info.title}`);
    this.props.closeNewBox();
  };

  render() {
    const {info} = this.props;
    return (
      <div className="myNewsBox__item">
        <div className="myNewsBox__item_name" onClick={this.gotoWritingPage}>{info.title}</div>
        <div className="myNewsBox__item_time">{info.created.substr(11, 8)}</div>
      </div>
    );
  };
};

export default withRouter(MyNewsBoxItem);