import React, { Component } from 'react';
import Projects from './projects/Projects';
import Footer from "../footer/Footer";
import Loading from "../utils/Loading";
import dataProjects from '../../data';
export default class Portfolio extends Component{
  constructor(props){
    super(props);
    this.state={
      displayCategory: "TOUS",
      projects:null,
      selectedMovie:0,
      loaded: false
    }
    setTimeout(() => {
      this.setState({
        projects: dataProjects,
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
          <Projects {...this.props} state = { this.state } setCategory = { this.setCategory }  />
          ) : ( <Loading /> ) 
        }    
        <Footer />
      </>
    )
  }
}