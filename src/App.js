import React from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import MainPage from "./Routes/MainPage/MainPage";
import MyLeftHeader from "./MyLeftHeader/MyLeftHeader";
import MyFooter from "./MyFooter/MyFooter";
import MyNewsBox from "./MyNewsBox/MyNewsBox";
import EditPage from "./Routes/EditPage/EditPage";
// import posed, { PoseGroup } from 'react-pose';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HashRouter>
          <MyLeftHeader/>
          <MyNewsBox/>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/edit" component={EditPage}/>
          </Switch>
          <MyFooter/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
