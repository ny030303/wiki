import * as React from 'react';
import "./SearchPage.css";

const charPoses = {
  exit: {y: 20, opacity: 0},
  enter: {
    y: 0,
    opacity: 1,
    transition: ({charInWordIndex}) => ({
      type: 'spring',
      delay: charInWordIndex * 30,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1
    })
  }
};

export default class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.contents = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => this.contents.current.style.left = 0, 100);
  }

  // componentWillUnmount() {
  //   this.contents.current.style.left = "-517px";
  //
  // }

  render() {
    return (
      <div className="popupPage__contents" ref={this.contents} style={{backgroundColor: "#a385bd"}}>

      </div>
    );
  };
};