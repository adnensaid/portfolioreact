import React, { Component } from 'react';
import Style from './progressAnimation.module.scss';
export default class ProgressAnimation extends Component{
  constructor(props){
    super(props);
    this.state = {
      className:'',
      showAnimation:false,
      endAnimation:false
    }
  }
  startStopAnimation = ()=>{
    const className = this.state.className;
    this.setState({
      className:className ? '' : Style.animation
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
    const stateStart = this.state.showAnimation && !this.state.endAnimation ? "block" : "none";
    const stateFin = this.state.endAnimation ? "block" : "none";
    return(
      <div className={ Style.card } >
        <h1>Progress Animation</h1>
        <div className={ Style.cardContent }>
          <div className={ Style.container }>
            <button
            className={ Style.btnCard }
            onClick = { this.startStopAnimation }
            >
              START/STOP
            </button>
            <div className={ Style.box }>
              <div
              className = { this.state.className }
              onAnimationStart = { this.onAnimationStart }
              onAnimationEnd = { this.onAnimationEnd }
              >
              </div>
            </div>    
            <h2 style={{ display:stateStart }}>Start...</h2>
            <h2 style={{ display:stateFin }}>Fin</h2>      
          </div>  
        </div>
      </div>
    )
  }
}