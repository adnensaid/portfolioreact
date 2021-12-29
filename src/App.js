import React, { Component } from 'react';
import './index.scss';
import { Header, Home, Portfolio, Labs, Contact } from './components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const FadeIn = (props)=>(
  <div className="show">
    { props.children }
  </div>
);
const ComposantFading = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <FadeIn>
      <Component {...props} />
    </FadeIn>
  )} />
)
export default class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <ComposantFading path="/test" component={Portfolio} />
            <Route path="/home" component={Home} />
            <Route path="/portfolio" component={Portfolio} />  
            <Route path="/labs" component={ Labs } />
            <Route path="/contact" component={ Contact } />
            <Redirect to="/home" />
          </Switch>
        </div>    
      </Router>
    )
  }
}
