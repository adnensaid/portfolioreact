import React, { Component } from 'react';
import Style from '../arrowanimation.module.scss';

export default class ArrowRight extends Component{
  constructor(props){
    super(props);
    this.state={
      className:[],
      showAnimation:false,
      endAnimation:false
    }
  }
  startStopAnimation = ()=>{
    const className = this.state.className;
    this.setState({
      className:className.length ? [] : [Style.rotate45, Style.rotateinverse45]
    })
  }
  onAnimationStart = ()=>{
    this.setState({
      showAnimation:true,
      endAnimation:false
    })
  }
  onAnimationEnd = ()=>{
    this.setState({
      showAnimation:false,
      endAnimation:true
    })    
  }
  render(){
    return(
      <div className={ Style.arrowanimation2 }>
        <button
        className="btn btn-primary"
        onClick = { this.startStopAnimation }
        >start/stop</button>
        <div
        className={ Style.circlearrow }
        onClick = { this.startStopAnimation }
        >
          <div
          className={ Style.arrowBarTop+" "+this.state.className[1] }
          onAnimationStart = { this.onAnimationStart }
          onAnimationEnd = { this.onAnimationEnd }
          ></div>
          <div className={ Style.arrowBarBottom +" "+this.state.className[0] }></div>
        </div>
      </div>  
    )
  }
}