import * as React from 'react';
import "./MainPage.css";
import YellowSection from "./YellowSection/YellowSection";
import PinkSection from "./PinkSection/PinkSection";
import OrangeSection from "./OrangeSection/OrangeSection";
import PurpleSection from "./PurpleSection/PurpleSection";
import CrackImageSection from "./CrackImageSection/CrackImageSection";
import PopupPage from "../PopupPage/PopupPage";


export default class MainPage extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="mainPage page">
        <YellowSection/>
        <PinkSection/>
        <CrackImageSection/>
        <OrangeSection/>
        <PurpleSection/>
      </div>
    );
  };
};