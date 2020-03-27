import React from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import MainPage from "./Routes/MainPage/MainPage";
import MyLeftHeader from "./MyLeftHeader/MyLeftHeader";
import MyFooter from "./MyFooter/MyFooter";
import MyNewsBox from "./MyNewsBox/MyNewsBox";
import EditPage from "./Routes/EditPage/EditPage";
import SearchResultPage from "./Routes/SearchResultPage/SearchResultPage";
import PanoramaPage from "./Routes/PanoramaPage/PanoramaPage";
import eventService from "./services/EventService";
import WritingPage from "./Routes/WritingPage/WritingPage";
import QnaPage from "./Routes/QnaPage/QnaPage";
// import posed, { PoseGroup } from 'react-pose';

class App extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      isPanorama: false
    };

    eventService.listenEvent("panoramaState", (res) => this.setState({isPanorama: res}));
  }


  render() {
    return (
      <div className="App">
        <HashRouter>
          <MyLeftHeader/>
          {this.state.isPanorama ? null :  (<MyNewsBox/>)}

          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/edit" component={EditPage}/>
            <Route exact path="/search/:text" component={SearchResultPage}/>
            <Route exact path="/panorama/:type" component={PanoramaPage}/>
            {/*<Route exact path="/writing/:writingId" component={WritingPage}/>*/}
            <Route exact path="/wiki/:title" component={WritingPage}/>
            <Route exact path="/qna" component={QnaPage}/>
          </Switch>
          {this.state.isPanorama ? null :  (<MyFooter/>)}
        </HashRouter>
      </div>
    );
  }
}

export default App;
