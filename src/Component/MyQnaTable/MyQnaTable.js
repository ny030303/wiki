import React from "react";
import {withRouter} from 'react-router-dom';
import "./MyQnaTable.css";

class MyQnaTable extends React.Component {

  render() {
    // const {datas} = this.props;
    return (
      <table className="xans-board-listheader">
        <thead>
        <tr>
          <th scope="col" style={{width:"70px"}}>번호</th>
          <th scope="col" style={{width:"auto"}}>제목</th>
          <th scope="col" style={{width:"77px"}}>작성자</th>
          <th scope="col" style={{width:"100px"}}>작성일</th>
        </tr>
        </thead>
        <tbody>
        <tr onClick={this.props.clickTableItem}>
          <td scope="row">1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td className="time">2019-11-01</td>
        </tr>
        <tr>
          <td scope="row">2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className="time">2019-11-01</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default withRouter(MyQnaTable);