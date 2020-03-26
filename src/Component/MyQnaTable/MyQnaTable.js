import React from "react";
import {withRouter} from 'react-router-dom';
import "./MyQnaTable.css";

class MyQnaTable extends React.Component {

  render() {
    // const {datas} = this.props;
    console.log(this.props.qnaItemData);
    return (
      <table className="xans-board-listheader">
        <thead>
        <tr>
          <th scope="col" style={{width:"70px"}}>번호</th>
          <th scope="col" style={{width:"auto"}}>제목</th>
          <th scope="col" style={{width:"77px"}}>작성자</th>
          <th scope="col" style={{width:"100px"}}>작성일</th>
          <th scope="col" style={{width:"77px"}}>답변여부</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.qnaItemData.map((v,i) => (
            <tr className="qnaTableItem" key={i}>
              <td scope="row">{v.id}</td>
              <td>
                <span className="qnaTableItem__title" onClick={this.props.clickTableItem} data-idx={v.id}>{v.title}</span>
              </td>
              <td>{v.writer_id}</td>
              <td className="time">{v.created.substr(0, 10)}</td>
              <td>{(v.answer_idx) ? "답변완료" : "답변전"}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    )
  }
}

export default withRouter(MyQnaTable);