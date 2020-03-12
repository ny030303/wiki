import * as React from 'react';
import "./MyNewsBoxItem.css";

export default class MyNewsBoxItem extends React.Component {
  render() {
    return (
      <div className="myNewsBox__item">
        <div className="myNewsBox__item_name">내용 제목</div>
        <div className="myNewsBox__item_time">12:10</div>
      </div>
    );
  };
};