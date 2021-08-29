import React, { Component } from 'react';
import './index.scss';
import Main from './components/main/main';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const MainwithRouter = withRouter(Main);
export default class App extends Component{
  render(){
    return(
      <Router>
        <MainwithRouter />
      </Router>

    )
  }
}
