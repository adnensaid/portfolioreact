import React, { Component } from 'react';
import Style from './burger.module.scss';

export default class Burger extends Component{
  render(){

    return(
      <div
      className={ Style.burger }
      onClick={ this.props.startStopAnimation }
      >
        <div 
        className={` 
        ${ Style.dropdownToggle } 
        ${this.props.classNameBurger ? this.props.classNameBurger : '' }  
        ${this.props.classNameBurger2 ? this.props.classNameBurger2 : '' }
        ${this.props.className ? this.props.className[1] : '' } 
        ${this.props.classNameArrowLeft ? this.props.classNameArrowLeft[3] : '' }
        ${ this.props.classNameArrowRight ? this.props.classNameArrowRight[3] : '' }
        `}
        

        onAnimationStart = { this.props.onAnimationStart ? this.props.onAnimationStart : this.props.onAnimationStartArrowLeft}
        onAnimationEnd = { this.props.onAnimationEnd ? this.props.onAnimationEnd : this.props.onAnimationEndArrowLeft }

        >
          <i></i>
          <i></i>
          <i></i>
        </div>    
      </div>     
    )
  }
}


