import * as React from 'react';
import "./PurpleSection.css";
import CrackText from "../../../Component/CrackText/CrackText";

export default class PurpleSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainCrackTextPercent: 100,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", this.changePercent.bind(this));
  }

  changePercent = () => {
    console.log(window);
    if(this.state && window.pageYOffset+window.innerHeight > document.querySelector(".purpleSection").offsetTop) {
      this.setState({mainCrackTextPercent: 0});
    } else {
      this.setState({mainCrackTextPercent: 100});
    }
  };


  render() {
    return (
      <div className="purpleSection sectionStyle">
        <div className="home-discover__title_wrap">
          <CrackText textClass="home-discover__title" textName="NEW" crackPercent={this.state.mainCrackTextPercent}/>
        </div>
      </div>
    );
  };
};