import React, { Component } from 'react';
import Style from './burger.module.scss';
export default class Burger extends Component{
  render(){
    return(
        <div
        className={ Style.burger }
        onClick={ this.props.startStopAnimation }
        onAnimationStart = { this.props.onAnimationStart }
        onAnimationEnd = { this.props.onAnimationEnd }
        >
          <div className={Style.dropdownToggle +" "+this.props.className[1]+" "+this.props.classNameArrowLeft[3]+" "+this.props.classNameArrowRight[3] }>
            <i></i>
            <i></i>
            <i></i>
          </div>    
        </div>  
    )
  }
}