import React from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import MainPage from "./Routes/MainPage/MainPage";
import MyLeftHeader from "./MyLeftHeader/MyLeftHeader";
import MyFooter from "./MyFooter/MyFooter";
// import posed, { PoseGroup } from 'react-pose';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HashRouter>
          <MyLeftHeader/>
          <Switch>
            <Route exact path="/" component={MainPage}/>
          </Switch>
          <MyFooter/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
