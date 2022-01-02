import React, { Component } from 'react';
import Footer from '../footer/Footer';
import data from './data';
import Projects from './projects/Projects';
import Loading from "../utils/Loading";
export default class Labs extends Component{
  constructor(props){
    super(props);
    this.state = {
      displayCategory:"TOUS",
      projects : null,
      selectedMovie:0,
      loaded: false
    }
    setTimeout(() => {
      this.setState({
        projects:data,
        loaded:true
      })
    }, 0);
  }
  setCategory = (category)=>{
    this.setState({
      displayCategory:category
    })
  }
  render(){
    return(   
      <>
      { this.state.loaded ? (
        <Projects state = { this.state } setCategory = { this.setCategory } />
      ) : ( <Loading /> ) }
      <Footer /> 
      </>
    )
  }
}