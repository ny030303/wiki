import * as React from 'react';
import "./ClassPeoplePage.css";

export default class ClassPeoplePage extends React.Component {

  constructor(props) {
    super(props);
    this.contents = React.createRef();
  }


  componentDidMount() {
    setTimeout(() => this.contents.current.style.left = 0, 100);

  }

  componentWillUnmount() {
    this.contents.current.style.left = "-517px";

  }

  render() {
    return (
      <div className="popupPage__contents" ref={this.contents} style={{backgroundColor: "#a385bd"}}>
        <div className="popupPage__title">See what’s going on today</div>
      </div>
    );
  };
};
