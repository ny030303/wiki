import * as React from 'react';
import "./PopupPage.css";
import SchedulePage from "./SchedulePage/SchedulePage";
import ClassPeoplePage from "./ClassPeoplePage/ClassPeoplePage";
import SearchPage from "./SearchPage/SearchPage";

export default class PopupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="popupPage">
        <div className="popupPage__dark" onClick={this.props.closePopup}/>
        {
          (() => {
            switch (this.props.page) {
              case "calendar":
                return (<SchedulePage/>);
              case "users":
                return (<ClassPeoplePage/>);
              case "search":
                return (<SearchPage/>);
                // "search", "map-marker"
            }
          })()
        }
      </div>
    );
  };
};